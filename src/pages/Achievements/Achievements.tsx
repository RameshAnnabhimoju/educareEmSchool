import "./Achievements.css";
import {
  achievements1,
  achievements2,
  achievements3,
  achievements4,
  achievements5,
  achievements6,
} from "../../assets";

function Achievements() {
  return (
    <div id="achievement-container">
      <div className="achievement-header-text">
        <h1>
          Our <br /> Achievements
        </h1>
      </div>
      <div className="main-certificates">
        <div className="main-certificate-1">
          <p>
            Honored to receive this recognition at the Early Years Educators
            Summit & Awards 2024! Grateful for this journey and excited for the
            future of education
          </p>
          <img src={achievements3} alt="Certificate 1" />
        </div>
        <div className="main-certificate-2">
          <img src={achievements1} alt="Certificate 2" />
          <p>
            Educare Em is awarded SCHOOL WITH BEST Education 2024 by NSA
            (National School Awards).
          </p>
        </div>
      </div>

      <hr />
      <div className="sub-certificates-container">
        <div className="sub-certificate-type-right">
          <p>
            Educare EM School has been ranked as one of the top 10 schools in
            the country
          </p>
          <img src={achievements2} alt="Sub Certificate" />
        </div>

        <hr />
        <div className="sub-certificate-type-left">
          <img src={achievements4} alt="Sub Certificate" />
          <p>
            Educare EM School has been ranked as one of the top 10 schools in
            the country
          </p>
        </div>
        <hr />
        <div className="sub-certificate-type-right">
          <p>
            Educare EM School has been ranked as one of the top 10 schools in
            the country
          </p>
          <img src={achievements5} alt="Sub Certificate" />
        </div>

        <hr />
        <div className="sub-certificate-type-left">
          <img src={achievements6} alt="Sub Certificate" />
          <p>
            Educare EM School has been ranked as one of the top 10 schools in
            the country
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Achievements;
