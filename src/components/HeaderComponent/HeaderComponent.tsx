import "./HeaderComponent.css";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
function HeaderComponent() {
  return (
    <header id="header-container">
      <div id="header-title-container">
        <Link to="/">
          <img alt="header logo" id="header-logo" src={logo} />
        </Link>
        <div id="header-title-section">
          <div id="header-title">
            {" "}
            <span id="header-title-edu">EDU</span>
            <span id="header-title-care">CARE</span> GLOBAL SCHOOL
          </div>
          {/* <div id="header-sub-title">(Affilliated to the CBSE, Delhi)</div> */}
          <div id="header-address">
            New High way, Geddada Village, Dr BR Ambedkar Konaseema District,
            AP- 533249
          </div>
        </div>
      </div>
      <div id="header-right-section">
        <i className="fa-solid fa-magnifying-glass header-icon" />
        <i className="fa-brands fa-youtube header-icon" />
        <i
          className="fa-brands fa-square-instagram header-icon"
          onClick={() =>
            window.open("https://www.instagram.com/educare.global/", "_blank")
          }
        />
        <i className="fa-brands fa-square-facebook header-icon" />
        <i className="fa-solid fa-phone header-icon" />
        <div id="header-contacts">9121344456</div>
      </div>
    </header>
  );
}

export default HeaderComponent;
