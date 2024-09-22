import "./NavbarComponent.css";
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
function NavbarComponent() {
  return (
    <nav id="navbar-container">
      <NavLink to="/" className="navbar-item-data">
        Home
      </NavLink>

      <Dropdown id="drop-down" autoClose="outside">
        <Dropdown.Toggle variant="" className="navbar-item-data">
           About
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item href="#/action-1" >
              <NavLink to="/management" className="dropdown-item">Management</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" >
              <NavLink to="/achievements" className="dropdown-item">Achievements</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" >
              <NavLink to="/infrastructureDetails" className="dropdown-item">Infrastructure Details</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-4" >
              <NavLink to="/aboutSchool" className="dropdown-item">About School</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="drop-down" autoClose="outside">
        <Dropdown.Toggle variant="" className="navbar-item-data">
            Facilities
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item href="#/action-1" >
              <NavLink to="/infrastructureFacility" className="dropdown-item">Infrastructure</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" >
              <NavLink to="/transportation" className="dropdown-item">Transportation</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="drop-down" autoClose="outside">
        <Dropdown.Toggle variant="" className="navbar-item-data">
            Admissions
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item href="#/action-1" >
              <NavLink to="/admissionProcess" className="dropdown-item">Admission Process</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" >
              <NavLink to="/feeStructure" className="dropdown-item">Fee Structure</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" >
              <NavLink to="/transferAdmission" className="dropdown-item">Transfer Admission</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown id="drop-down" autoClose="outside">
        <Dropdown.Toggle variant="" className="navbar-item-data">
        Circulars
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          <Dropdown.Item href="#/action-1" >
              <NavLink to="/upComingEvents" className="dropdown-item">Upcoming Events</NavLink>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" >
              <NavLink to="/concludedEvents" className="dropdown-item">Concluded Events</NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  

      <NavLink to="/contactUS" className="navbar-item-data">
      Contact Us
      </NavLink>
      
      <NavLink className="navbar-item-data" to="/login">
        Login
      </NavLink>
      
      {/* <div
        className="navbar-item-data"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </div> */}
      <div className="menu-icon">
       <i className="fa-solid  fa-bars" />
      </div>
    </nav>
  );
}

export default NavbarComponent;
