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
  const disclosureLinks = [
    {
      to: "/mandatory-public-disclosure",
      label: "Mandatory Public Disclosures",
    },
    { to: "/cbse-affiliation", label: "CBSE Affiliation" },
    { to: "/society-certificate", label: "Society Certificate" },
    { to: "/smc", label: "SMC" },
    { to: "/pta", label: "PTA" },
    { to: "/academic-calendar", label: "Academic Calendar" },
    { to: "/fee-structure", label: "Fee Structure" },
    { to: "/strength-details", label: "Strength Details" },
    { to: "/staff-details", label: "Staff Details" },
    { to: "/infrastructure", label: "Infrastructure" },
    { to: "/sanitary-certification", label: "Sanitary Certificate" },
    { to: "/fire-safety", label: "Fire Safety" },
    {
      to: "/drinking-water",
      label: "Drinking Water And Water Testing Certificate",
    },
    {
      to: "/building-safety-certificate",
      label: "Building Safety Certificate",
    },
    { to: "/global-recognition", label: "Recognition Certificate" },
    { to: "/affidavit", label: "Affidavit" },
    { to: "/self-certificate", label: "Self Certificate" },
    { to: "/land-certificate", label: "Land Certificate" },
  ];
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
              <Nav.Link
                as={Link}
                to="/"
                eventKey="/"
                className="navbar-item-data"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/aboutSchool"
                eventKey="/aboutSchool"
                className="navbar-item-data"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/infrastructureFacility"
                eventKey="/infrastructureFacility"
                className="navbar-item-data"
              >
                Facilities
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/comingSoon"
                eventKey="/comingSoon"
                className="navbar-item-data"
              >
                Teaching &amp; Learning
              </Nav.Link>
              <hr />

              <NavDropdown
                align="end"
                title={<About />}
                className="navbar-item-data"
              >
                {disclosureLinks.map(({ to, label }) => (
                  <NavDropdown.Item key={to} as={Link} to={to} eventKey={to}>
                    {label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <hr />

              <Nav.Link
                as={Link}
                to="/contactUS"
                eventKey="/contactUS"
                className="navbar-item-data"
              >
                Contact Us
              </Nav.Link>
              <hr />
              <Nav.Link
                as={Link}
                to="/login"
                eventKey="/login"
                className="navbar-item-data"
              >
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}

export default NavbarComponent;
