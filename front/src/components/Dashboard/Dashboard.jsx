import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';

import "./dashboard.css"
import {getAllUsers } from '../../Redux/actions/userActions';
import { Link } from 'react-router-dom';
import DeleteUser from './DeleteUser';



const Dashboard = () => {
  
  const IsAdmin = useSelector((state)=>state.userReducer.user.role)
  const [role, setRole] = useState("all");

  const dispatch = useDispatch();
    const allusers = useSelector((state) => state.userReducer.users);
    useEffect(() => {
      dispatch(getAllUsers(role));
    }, [role]);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getAllUsers(role));
    ;
  };
//select
  return (
    
    <div>
      {IsAdmin==="admin"?
      <>
       <form >
      <group  className="bton">
        <button type="button" onClick={() => {setRole("all");dispatch(getAllUsers(role))}}  class="btn btn-dark btn-rounded">All Users</button>
        <button type="button" onClick={() => {setRole("student");dispatch(getAllUsers(role))}}  class="btn btn-dark btn-rounded">Students</button>
        <button type="button" onClick={() => {setRole("director");dispatch(getAllUsers(role))}}  class="btn btn-dark btn-rounded">Directors</button>
        </group>
        </form>
        <MDBTable className='allusers' align='middle'>
        
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>Role</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
            {allusers.map((user) => (
          <tr user={user} key={user._id} >
            <td >
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1' >{user.firstName} {user.lastName}</p>
                <p className='text-muted mb-0'>{user.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{user.email}</p>
            
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>{user.role}</td>
          <td>
          {/* onClick={() => dispatch(deleteUser(user._id))} */}
         
           <DeleteUser user={user} key={user._id}/>
            
          </td>
          </tr>
        ))}
      </MDBTableBody>
      <> </>
    </MDBTable>
    </>
   :
   <div className="d-flex align-items-center justify-content-center vh-100">
  <div className="text-center">
    <h1 className="display-1 fw-bold">404</h1>
    <p className="fs-3"> <span className="text-danger">Ops!</span> Page not found.</p>
    <p className="lead">
      Nice try ! But you are not an admin
    </p>
    <Link to={"/"}><MDBBtn>Go Home</MDBBtn></Link>
    <hr />
    <p className="lead">
      or try hacking the database so you can become an admin
    </p>
  </div>
</div>
}
    </div>
    
  )
}

export default Dashboard