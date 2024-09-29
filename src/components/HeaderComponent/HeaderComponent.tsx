import "./HeaderComponent.css";
import { logo } from "../../assets";
function HeaderComponent() {
  return (
    <header id="header-container">
      <div id="header-title-container">
        <img alt="header logo" id="header-logo" src={logo} />
        <div id="header-title-section">
          <div id="header-title">Educare EM School</div>
          <div id="header-sub-title">(Affilliated to the CBSE, Delhi)</div>
          <div id="header-address">
            Molleti vari merakha, Mamidikuduru mandal, BR Ambedkar konaseema
            dist, Nagaram, AP. 533247
          </div>
        </div>
      </div>
      <div id="header-right-section">
        <i className="fa-solid fa-magnifying-glass header-icon" />
        <i className="fa-brands fa-youtube header-icon" />
        <i className="fa-brands fa-square-instagram header-icon" />
        <i className="fa-brands fa-square-facebook header-icon" />
        <i className="fa-solid fa-phone header-icon" />
        <div id="header-contacts">
          9999999999,
          <br /> 8888888888
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
