
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/actions/userActions';
import Testimonial from '../GuestHome/Testimonial/Testimonial';
import ForAdmin from '../private/ForAdmin';
import ForDirector from '../private/ForDirector';
import "./Navb.css"
function Navb() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userinfo = useSelector((state)=>state.userReducer.user)
  // const inout = (event)=>{
  //   event.preventDefault();
  //   localStorage.getItem("token") ? 
  // (<div onClick={() => {dispatch(logout());navigate("/login", { replace: true });}}>Logout</div>) : 
  // (<Link to="/login">Login</Link>);}
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand ><Link to="/">DormsNet</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <ForDirector> <Link to="/addDorm">Create your Dorm</Link> </ForDirector>
           <Link to="/dormlist">Dorms List</Link>
           <ForAdmin><Link to="/dashboard">Dashboard</Link></ForAdmin>
           <ForAdmin><Link to="/adddirector">Add a Director</Link></ForAdmin>
           <Link to="/feeds">Feed Backs</Link>
          </Nav>
        
          <Nav>
          <Nav.Link href="#pricing">FAQ</Nav.Link>
            <NavDropdown title="Profile" id="collasible-nav-dropdown">
              
              <NavDropdown.Item href="#action/3.2">
              <Link to={`/user/${userinfo._id}`}>{userinfo.firstName}</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  >
              {localStorage.getItem("token") ? 
  <div onClick={() => {dispatch(logout());navigate("/login", { replace: true });}}>Logout</div> :<Link to="/login">Login</Link>}
                {/* <Link to="/register">Login / SignUp</Link>  */}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;