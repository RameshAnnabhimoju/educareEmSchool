import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import QuickLinksComponent from "../../components/QuicklinksComponent/QuickLinksComponent";
// import EventsComponent from "../../components/EventsComponent";
// import CircularsComponent from "../../components/CircularsComponent";
import AboutSchoolComponent from "../../components/AboutSchoolComponent/AboutSchoolComponent";
import FacilitiesComponent from "../../components/FacilitiesComponent/FacilitiesComponent";
// import AdmissionsComponent from "../../components/AdmissionsComponent/AdmissionsComponent";
import CampusDetailsBannerComponent from "../../components/CampusDetailsBannerComponent/CampusDetailsBannerComponent";
import { Button, Form } from "react-bootstrap";

function Homepage() {
  return (
    <div>
      <CarouselComponent />
      <QuickLinksComponent />
      {/* <EventsComponent />
      <CircularsComponent /> */}
      <AboutSchoolComponent />
      <CampusDetailsBannerComponent />
      <FacilitiesComponent />
      {/* <AdmissionsComponent /> */}
      <div id="contact-us-from">
        <p>
          <h2>Get in touch with us</h2>
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

export default Homepage;
