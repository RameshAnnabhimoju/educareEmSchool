import "./NavbarComponent.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Dropdown from "react-bootstrap/esm/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarComponent() {
  const About = () => {
    return (
      <span className="navbar-item-span-data">Mandatory Public Disclosure</span>
    );
  };
  // const Facilities = () => {
  //   return <span className="navbar-item-span-data">Facilites</span>;
  // };
  // const Admissions = () => {
  //   return <span className="navbar-item-span-data">Admissions</span>;
  // };
  // const Circulars = () => {
  //   return <span className="navbar-item-span-data">Circulars</span>;
  // };

  return (
    <nav id="navbar-container">
      <Navbar collapseOnSelect variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggle ms-auto "
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="fw-bold" id="navitems-container">
              <Link to="/" className="navbar-item-data">
                <div className="navbar-item-data">Home</div>
              </Link>
              <Link to="/aboutSchool" className="navbar-item-data">
                <div className="navbar-item-data">About</div>
              </Link>
              <Link to="/infrastructureFacility" className="navbar-item-data">
                <div className="navbar-item-data">Facilities</div>
              </Link>
              <Link to="/comingSoon" className="navbar-item-data">
                <div className="navbar-item-data">Teaching & Learning </div>
              </Link>
              <hr />
              <NavDropdown
                align={"end"}
                title={<About />}
                className="navbar-item-data"
              >
                <Link to="/mandatory-public-disclosure">
                  <div className="dropdown-item">
                    Mandatory Public Disclosures
                  </div>
                </Link>
                <Link to="/society-certificate">
                  <div className="dropdown-item">Society Certificate</div>
                </Link>
                <Link to="/smc">
                  <div className="dropdown-item">SMC</div>
                </Link>
                <Link to="/pta">
                  <div className="dropdown-item">PTA</div>
                </Link>
                <Link to="/academic-calendar">
                  <div className="dropdown-item">Academic Calendar</div>
                </Link>
                <Link to="/fee-structure">
                  <div className="dropdown-item">Fee Structure</div>
                </Link>
                <Link to="/strength-details">
                  <div className="dropdown-item">Strength Details</div>
                </Link>
                <Link to="/staff-details">
                  <div className="dropdown-item">Staff Details</div>
                </Link>
                <Link to="/infrastructure">
                  <div className="dropdown-item">Infrastructure</div>
                </Link>
                <Link to="/sanitary-certification">
                  <div className="dropdown-item">Sanitary Certificate</div>
                </Link>
                <Link to="/fire-safety">
                  <div className="dropdown-item">Fire Safety</div>
                </Link>
                <Link to="/drinking-water">
                  <div className="dropdown-item">
                    Drinking Water And Water Testing Certificate
                  </div>
                </Link>
                <Link to="/building-safety-certificate">
                  <div className="dropdown-item">
                    Building Safety Certificate
                  </div>
                </Link>
                <Link to="/global-recognition">
                  <div className="dropdown-item">Recognition Certificate</div>
                </Link>
                {/* <Link to="/noc">
                  <div className="dropdown-item">NOC</div>
                </Link> */}
                <Link to="/affidavit">
                  <div className="dropdown-item">Affidavit</div>
                </Link>
                {/* <Link to="/water-sample-test">
                  <div className="dropdown-item">Water Sample Test</div>
                </Link> */}
                <Link to="/self-certificate">
                  <div className="dropdown-item">Self Certificate</div>
                </Link>
                <Link to="/land-certificate">
                  <div className="dropdown-item">Land Certificate</div>
                </Link>
              </NavDropdown>
              <hr />
              {/*
            <NavDropdown title={<Facilities />} className="navbar-item-data">
              <Link href="/infrastructureFacility">
                <div className="dropdown-item">Infrastructure</div>
              </Link>
              <Link href="/transportation">
                <div className="dropdown-item">Transportation</div>
              </Link>
            </NavDropdown>
            <hr />
            <NavDropdown title={<Admissions />} className="navbar-item-data">
              <Link href="/admissionProcess">
                <div className="dropdown-item">Admission Process</div>
              </Link>
              <Link href="/feeStructure">
                <div className="dropdown-item">Fee Structure</div>
              </Link>
              <Link href="/transferAdmission">
                <div className="dropdown-item">Transfer Admission</div>
              </Link>
            </NavDropdown>
            <hr />
            <NavDropdown title={<Circulars />}className="navbar-item-data">
              <Link href="/upComingEvents">
                <div className="dropdown-item">Upcoming Events</div>
              </Link>
              <Link href="/concludedEvents">
                <div className="dropdown-item">Concluded Events</div>
              </Link>
            </NavDropdown> */}
              <hr />
              <Nav.Link href="/contactUS" className="navbar-item-data">
                <div className="navbar-item-data">Contact Us</div>
              </Nav.Link>
              <hr />
              <Nav.Link href="/login" className="navbar-item-data">
                <div className="navbar-item-data">Login</div>
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
