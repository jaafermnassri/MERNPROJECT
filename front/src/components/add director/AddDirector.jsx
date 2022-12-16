
import React from "react"
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../Redux/actions/userActions";
import {MDBBtn,MDBContainer, MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardImage,MDBInput,MDBIcon, MDBCheckbox}from 'mdb-react-ui-kit';
import "./adddirector.css"
export default function AddDirector() {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register(
        {
          email: data.get("email"),
          password: data.get("password"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          role: data.get("role"),
        },
        navigate
      )
    );
  };

  // let [authMode, setAuthMode] = useState("signin")

  // const changeAuthMode = () => {
  //   setAuthMode(authMode === "signin" ? "signup" : "signin")
  // }

 

  return (
    <div>
     <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
          
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
            <form method="POST" onSubmit={handleSubmit} className="Auth-form">
              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create a director user</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput name="firstName" label='First Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput name="lastName" label='Last Name' id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput name="role" label='Role' value={"director"} id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput name="email" label='Your Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput  name="password" label='Password' id='form3' type='password'/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              {/* <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div> */}

              <MDBBtn className='mb-4' size='lg'>Create</MDBBtn>
              {/* <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to="/login">Login</Link></p> */}
              </form>
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              
            </MDBCol>
           
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </MDBContainer>
    </div>
  )
}

