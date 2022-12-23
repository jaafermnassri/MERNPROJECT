import React, { useEffect } from 'react'
import { deleteFoyer, detailsFoyer } from '../../Redux/actions/foyerActions';
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EditDorm from '../EditDorm/EditDorm';
import BookDorm from '../BookDorm/BookDorm';
import ForStudent from '../private/ForStudent';
import ForDirector from '../private/ForDirector';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';
import { getAllBookings } from '../../Redux/actions/bookingActions';
import { detailsUser } from '../../Redux/actions/userActions';


const DormDashboard = () => {
  const {id} = useParams()
  const IsDirector = useSelector((state)=>state.userReducer.user.role)
    const userid = useSelector((state)=>state.userReducer.user._id)
    const oneFoyer = useSelector((state)=> state.foyerReducer.oneFoyer);
    const allBookings = useSelector((state)=> state.bookingReducer.bookings);
    // const ids = useSelector((state)=> state.bookingReducer.bookings.user);
  const dispatch = useDispatch();

useEffect(() => {
  console.log(id);
    dispatch(detailsFoyer(id)) 
  }, []);

useEffect(() => {
  console.log(allBookings)
  dispatch(getAllBookings(id));
  }, []);

 useEffect(() => {
  dispatch(detailsUser(userid))

 }, [])
 
  return (
    <div>
        {IsDirector==="director"?
    <>
        <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={oneFoyer.image}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px',height:"150px" }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                <ForDirector>
                  {userid == oneFoyer.user ?
        <><EditDorm/>
        <MDBBtn onClick={() => dispatch(deleteFoyer(id))} ><Link to="/">delete</Link></MDBBtn></>:null}
        </ForDirector>
        <ForStudent><BookDorm /></ForStudent>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fullname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{oneFoyer.fullname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Available Rooms</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{oneFoyer.maxCapacity}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{oneFoyer.adresse}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
          <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>ID</th>
          <th scope='col'>University</th>
          <th scope='col'>Action</th>
          <th scope='col'>Action2</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {allBookings.map((booker) => (
        


          <tr booker={booker} key={booker._id} >
          <th scope='row'>1</th>
          <td>{booker.user}</td>
          <td>{booker.university}</td>
          
          <td>@mdo</td>
        </tr>
         
        ))}
      
      </MDBTableBody>
    </MDBTable>
    </MDBCard>
    </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </section>
    </>
    :<div className="d-flex align-items-center justify-content-center vh-100">
    <div className="text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-3"> <span className="text-danger">Ops!</span> Page not found.</p>
      <p className="lead">
        Nice try ! But you are not a Director
      </p>
      <Link to={"/"}><MDBBtn>Go Home</MDBBtn></Link>
      <hr />
      <p className="lead">
        or try hacking the database so you can become a Director
      </p>
    </div>
  </div>}
    </div>
  )
}

export default DormDashboard