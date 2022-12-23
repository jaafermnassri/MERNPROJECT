import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../Redux/actions/userActions';
import {  MDBBtn,  MDBModal, MDBModalDialog, MDBModalContent, MDBModalTitle, MDBModalHeader, MDBModalBody, MDBModalFooter } from 'mdb-react-ui-kit';
const DeleteUser = ({user}) => {
    const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
    const dispatch = useDispatch();
  return (
    <div>
        <MDBBtn   onClick={toggleShow}  rounded size='sm'>
              Delete
            </MDBBtn>
            <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
            <MDBModalDialog>
            <MDBModalContent>
            <MDBModalHeader>
                <MDBModalTitle>Wait a moment</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                Are you sure you want to delete {user.firstName} ?
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn type="submit" onClick={(e)=>{toggleShow(); dispatch(deleteUser(user._id))}}>Delete</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
            </MDBModalDialog>
            </MDBModal>
    </div>
  )
}

export default DeleteUser