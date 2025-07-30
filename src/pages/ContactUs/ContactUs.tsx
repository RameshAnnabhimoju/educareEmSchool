import "./ContactUs.css";
import { Button, Form } from "react-bootstrap";
function ContactUs() {
  return (
    <div className="contact-us-container">
      <div className="contact-us-header-text">
        <h1>Contact Us</h1>
      </div>
      <div id="contact-us-details">
        <p>
          Wish to enquire about admissions, syllabus, or anything else? <br />
          You can walk in during office hours, give us a call or simply submit
          the form here.
        </p>
        <p>
          <strong>
            <i className="fas fa-map-marker-alt"></i>
          </strong>{" "}
          Address
        </p>
        <h3 className="contact-us-subdetails">
          Educare EM School <br />
          New High way, Mamidikuduru mandal,
          <br />
          Dr. BR Ambedkar konaseema district, Nagaram,
          <br />
          Andhra Pradesh, India.533249
        </h3>
        <p>
          <strong>
            <i className="fas fa-phone-alt"></i> Phone
          </strong>
        </p>
        <p>office :9121344456</p>
        {/* <table className="contact-us-table">
          <tr>
            <td>STD Code</td>
            <td>9999</td>
          </tr>
          <tr>
            <td>Mobile No.</td>
            <td>9999999999, 8888888888</td>
          </tr>
          <tr>
            <td>KinderGarten</td>
            <td>7777777777, 6666666666</td>
          </tr>
        </table> */}
        <br />
        <p>
          <strong>
            <i className="fas fa-envelope"></i> Email
          </strong>
        </p>
        <p>
          principal@educareschool.edu.in <br />
          director@educareschool.edu.in
        </p>
        <br />
        <p>
          <strong>
            <i className="fas fa-globe"></i> School Office Hours
          </strong>{" "}
        </p>
        <p>
          Monday to Friday : 09.30 a.m. to 04.30 p.m. <br />
          Saturday : 09.30 a.m. to 12.30 p.m.
        </p>
      </div>
      <div id="contact-us-from">
        <p>
          <strong>Get in touch with us</strong>
        </p>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            className="contact-us-input"
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Email"
            className="contact-us-input"
          />
        </Form.Group>
        <Form.Group controlId="formMobile">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Mobile Number"
            className="contact-us-input"
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Message"
            className="contact-us-input"
          />
        </Form.Group>
        <Button>Submit</Button>
      </div>
    </div>
  );
}

export default ContactUs;
