import "./QuicklinksComponent.css";
import { NavLink } from "react-router-dom";
function QuickLinksComponent() {
  return (
    <div id="quicklinks-container">
      <div className="quick-links-item"> 
        <NavLink to="/upComingEvents" >
        <img
          src="https://littlerock.edu.in/wp-content/uploads/elementor/thumbs/book-pn8rmd8pmk8b9349fl471hrv4b6q3c2nkdnx2l7xis.png"
          alt=""
          className="quick-links-image"
        />
        </NavLink>
        <div className="quick-links-text">Circulars</div>
      </div>
      
      <div className="quick-links-item">
      <NavLink to="/aboutSchool" target="_blank"> 
        <img
          src="https://littlerock.edu.in/wp-content/uploads/elementor/thumbs/online-learning-pn8rqgtdfjubvv5whuwmeyj8dszcntcigo35f154dw.png"
          alt=""
          className="quick-links-image"
        />
         </NavLink>
        <div className="quick-links-text">Documentary</div>
      </div>
      <div className="quick-links-item">
      <NavLink to="/management" target="_blank"> 
        <img
          src="https://littlerock.edu.in/wp-content/uploads/elementor/thumbs/idea-pn8rqp9x525wsctm4gk9jeedq9tnl3a3htyiqisktw.png"
          alt=""
          className="quick-links-image"
        />
         </NavLink>
        <div className="quick-links-text">Our Founders</div>
      </div>
      <div className="quick-links-item">
        <img
          src="https://littlerock.edu.in/wp-content/uploads/elementor/thumbs/gears-pn8sfy7upuq6na5bovgi0j145vdlceijast1t3cvp0.png"
          alt=""
          className="quick-links-image"
        />
        <div className="quick-links-text">Warning Against Fraud</div>
      </div>
      <div className="quick-links-item">
        <NavLink to="/infrastructureFacility" target="_blank">
        <img
          src="https://littlerock.edu.in/wp-content/uploads/elementor/thumbs/diploma-pn8sgsaosjvcysxmt8gk8bfv679c6pty2xol5y4a5w.png"
          alt=""
          className="quick-links-image"
        />
        </NavLink>
        <div className="quick-links-text">Special Features</div>
      </div>
      <div className="quick-links-item">
      <NavLink to="/achievements" target="_blank"> 
        <img
          src="https://littlerock.edu.in/wp-content/uploads/elementor/thumbs/presentation-pn8si9vhm3wpckrt4dmaofx515x9dgqnaav9ipwub8.png"
          alt=""
          className="quick-links-image"
        /></NavLink>
        <div className="quick-links-text">Achievements</div>
      </div>
    </div>
  );
}

export default QuickLinksComponent;
