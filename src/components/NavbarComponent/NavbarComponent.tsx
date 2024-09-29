import "./NavbarComponent.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from "react-bootstrap/esm/Dropdown";
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  const About = () => {
    return <span className="navbar-item-span-data">About</span>;
  };
  const Facilities = () => {
    return <span className="navbar-item-span-data">Facilites</span>;
  };
  const Admissions = () => {
    return <span className="navbar-item-span-data">Admissions</span>;
  };
  const Circulars = () => {
    return <span className="navbar-item-span-data">Circulars</span>;
  };

  return (
    <nav id="navbar-container" >
      <Navbar collapseOnSelect  variant="dark"  expand="lg" >
        <Container fluid >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-toggle ms-auto "/>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav  className="fw-bold" id="navitems-container"  >
            <Nav.Link href="/" className="navbar-item-data"  >
             <div  className="navbar-item-data">
                Home
              </div> 
            </Nav.Link>
            <hr />
            <NavDropdown title={<About />}  className="navbar-item-data">
              <Dropdown.Item href="/management">
                <div  className="dropdown-item">Management</div>
              </Dropdown.Item>
              <Dropdown.Item href="/achievements">
                <div  className="dropdown-item">Achievements</div>
              </Dropdown.Item>
              <Dropdown.Item href="/infrastructureDetails">
                <div className="dropdown-item">Infrastructure Details</div>
              </Dropdown.Item>
              <Dropdown.Item href="/aboutSchool">
              <div  className="dropdown-item">About School</div>
              </Dropdown.Item>
            </NavDropdown>            
            <hr />
            <NavDropdown title={<Facilities />} className="navbar-item-data">
              <Dropdown.Item href="/infrastructureFacility">
                <div className="dropdown-item">Infrastructure</div>
              </Dropdown.Item>
              <Dropdown.Item href="/transportation">
                <div className="dropdown-item">Transportation</div>
              </Dropdown.Item>
            </NavDropdown>
            <hr />
            <NavDropdown title={<Admissions />} className="navbar-item-data">
              <Dropdown.Item href="/admissionProcess">
                <div className="dropdown-item">Admission Process</div>
              </Dropdown.Item>
              <Dropdown.Item href="/feeStructure">
                <div className="dropdown-item">Fee Structure</div>
              </Dropdown.Item>
              <Dropdown.Item href="/transferAdmission">
                <div className="dropdown-item">Transfer Admission</div>
              </Dropdown.Item>
            </NavDropdown>
            <hr />
            <NavDropdown title={<Circulars />}className="navbar-item-data">
              <Dropdown.Item href="/upComingEvents">
                <div className="dropdown-item">Upcoming Events</div>
              </Dropdown.Item>
              <Dropdown.Item href="/concludedEvents">
                <div className="dropdown-item">Concluded Events</div>
              </Dropdown.Item>
            </NavDropdown>
            <hr />
            <Nav.Link href="/contactUS" className="navbar-item-data"> 
              <div className="navbar-item-data">
              Contact Us
              </div>
            </Nav.Link>
            <hr />
            <Nav.Link href="/login" className="navbar-item-data">
              <div className="navbar-item-data" >
                Login
              </div>
            </Nav.Link>
            <hr />
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </nav>
  );
}

export default NavbarComponent;
