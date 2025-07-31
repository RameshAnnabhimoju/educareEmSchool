import { useLocation } from "react-router-dom";
import societyCertificate from "../../assets/school registration.pdf";
import smc from "../../assets/management-commitee.pdf";
import pta from "../../assets/pta.pdf";
import cal1 from "../../assets/1st to 5th calender.pdf";
import cal2 from "../../assets/6th to 8th calender.pdf";
import "./MandatoryPublicDisclosure.css";
import ComingSoon from "../ComingSoon/ComingSoon";
import noc from "../../assets/noc.pdf";
import waterSaftey from "../../assets/water-testing.jpg";
import buildingSaftey from "../../assets/building-safety.jpg";
import feeStructure from "../../assets/strength.pdf";
import sanitaryCertificate from "../../assets/sanitary.pdf";
import globalRecognition from "../../assets/Global Recognition.pdf";
import affidavit from "../../assets/affidavit.pdf";
const MandatoryPublicDisclosure = () => {
  const path = useLocation();
  return (
    <div>
      {path.pathname == "/society-certificate" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Society Certificate</h1>
          <object
            className="pdf"
            data={societyCertificate}
            width="800"
            height="950"
          ></object>
        </div>
      )}
      {path.pathname == "/smc" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">School Management Committee</h1>
          <object className="pdf" data={smc} width="800" height="950"></object>
        </div>
      )}
      {path.pathname == "/pta" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">PTA</h1>
          <object className="pdf" data={pta} width="800" height="950"></object>
        </div>
      )}
      {path.pathname == "/academic-calendar" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Academic Calendar</h1>
          <div style={{ display: "flex", gap: "20px" }}>
            <object
              className="pdf"
              data={cal1}
              width="800"
              height="950"
            ></object>
            <object
              className="pdf"
              data={cal2}
              width="800"
              height="950"
            ></object>
          </div>
        </div>
      )}
      {path.pathname == "/fee-structure" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Fee Structure</h1>
          <object
            className="pdf"
            data={feeStructure}
            width="800"
            height="950"
          ></object>
        </div>
      )}
      {path.pathname == "/sanitary-certification" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Sanitary Certificate</h1>
          <object
            className="pdf"
            data={sanitaryCertificate}
            width="800"
            height="950"
          ></object>
        </div>
      )}
      {path.pathname == "/fire-safety" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Fire Safety</h1>
          <object className="pdf" data={noc} width="800" height="950"></object>
        </div>
      )}
      {path.pathname == "/drinking-water" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Drinking Water</h1>
          <img src={waterSaftey} alt="Water Safety" className="mpd-image" />
        </div>
      )}
      {path.pathname == "/building-safety-certificate" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Building Safety Certificate</h1>
          <img src={buildingSaftey} alt="Water Safety" className="mpd-image" />
        </div>
      )}
      {path.pathname == "/global-recognition" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Global Recognition</h1>
          <object
            className="pdf"
            data={globalRecognition}
            width="800"
            height="950"
          ></object>
        </div>
      )}
      {path.pathname == "/noc" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">NOC</h1>
          <object className="pdf" data={noc} width="800" height="950"></object>
        </div>
      )}
      {path.pathname == "/affidavit" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Affidavit</h1>
          <object
            className="pdf"
            data={affidavit}
            width="800"
            height="950"
          ></object>
        </div>
      )}
      {path.pathname == "/water-sample-test" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Water Sample Test</h1>
          <img src={waterSaftey} alt="Water Safety" className="mpd-image" />
        </div>
      )}
      {path.pathname == "/land-certificate" && (
        <div className="mpd-item-container">
          <h1 className="mpd-heading">Land Certificate</h1>
          <ComingSoon />
        </div>
      )}
    </div>
  );
};

export default MandatoryPublicDisclosure;
