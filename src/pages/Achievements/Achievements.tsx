import "./Achievements.css";
import {achievements1, achievements2, achievements3, achievements4, achievements5, achievements6} from "../../assets";


function Achievements()  {
  return (
    <div id="achievement-container">
      <div className="achievement-header-text">
        <h1>Our <br /> Achievements</h1>
      </div>  
      <div className="main-certificates">
            <div className="main-certificate-1">
                <p>Careers360, a leading Education Magazine has rated Little Rock with “AAAA” grade for the academic year 2023-24 under Residential School Category.</p>
                <img src={achievements3} alt="Certificate 1" />
            </div>
            <div className="main-certificate-2">
                <img src={achievements1} alt="Certificate 2" />
                <p>Educare Em is awarded SCHOOL WITH BEST Education 2024 by NSA (National School Awards).</p>
            </div>
        </div>
        
        <hr />
        <div className="sub-certificates-container">
          <div className="sub-certificate-type-right">
            <div>
              <p>Educare EM School has been ranked as one of the top 10 schools in the country</p>
            </div>
            <div>
              <img src={achievements2} alt="Sub Certificate"/>
            </div>
          </div>
         
          <hr />
          <div className="sub-certificate-type-left">
            <div><img src={achievements4} alt="Sub Certificate"/></div>
            <div>
            <p>Educare EM School has been ranked as one of the top 10 schools in the country</p></div>
          </div>
          <hr />
          <div className="sub-certificate-type-right">
            <p>Educare EM School has been ranked as one of the top 10 schools in the country</p>
            <img src={achievements5} alt="Sub Certificate"/>
          </div>

          <hr />
          <div className="sub-certificate-type-left">
            <img src={achievements6} alt="Sub Certificate"/>
            <p>Educare EM School has been ranked as one of the top 10 schools in the country</p>
          </div>
        </div>
        <hr />
    
    </div>
  )
}

export default Achievements