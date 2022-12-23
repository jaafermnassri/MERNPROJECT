import axios from "axios";
import {NEW_BOOKING_SUCCESS,NEW_BOOKING_FAIL,GET_BOOKING_SUCCESS,GET_BOOKING_FAIL,GET_BOOKING_LOADING} from "../consts/bookingConsts"


//create a booking
export const addBook = (id,newBook,navigate) => async (dispatch) => {
  
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:5005/api/bookings/${id}`,
        newBook,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch({ type: NEW_BOOKING_SUCCESS, payload: res.data });
    alert("Booked Successfully");
    } catch (error) {
      dispatch({ type: NEW_BOOKING_FAIL, payload: error });
      console.dir(error);
      alert(error.response.data.msg);
    }
  }


  // get all bookings 
  export const getAllBookings = (id) => async (dispatch) => {
    dispatch({ type: GET_BOOKING_LOADING });
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(
        `http://localhost:5005/api/bookings/${id}`,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({ type: GET_BOOKING_SUCCESS, payload: res.data });
      
    } catch (error) {
      dispatch({ type: GET_BOOKING_FAIL, payload: error });
    }
  };