import { class5, class6 } from "../../assets";
import "./FacilitiesComponent.css";
function FacilitiesComponent() {
  return (
    <div id="facilities-container">
      <div className="facilities-card">
        <img src={class5} alt="" className="facilities-card-image" />
        <div className="facilities-card-title">School Facility</div>
        <div className="facilities-card-text">
          The School was founded by Late Dr C.T. Abraham, who had extensive
          experience in the field of education in India and the USA. Though he
          is no more, the high ideals and principles he embodied are inherited
          by his successors. The management is composed of individuals with rich
          experience in the field of education both in India and abroad. Little
          Rock’s global vision of education is the obvious result of such an
          enlightened leadership
        </div>
        <button className="facilities-button">Read more</button>
      </div>
      <div className="facilities-card">
        <img src={class6} alt="" className="facilities-card-image" />
        <div className="facilities-card-title">School Facility</div>
        <div className="facilities-card-text">
          Priority Highlands, the beautiful 30-acre campus, situated in Chanthar
          Village in Brahmavar, Udupi District is the home of LRIS. This campus
          is popularly known as “LITTLE ROCK”, and is 4 kms east of Brahmavar
          Bus Station on the Brahmavar-Hebri Road. Brahmavar is on National
          Highway No. 66, about 72 kms north of Mangalore. The nearest Airport
          is at Mangalore. The nearest Railway Station is in Udupi, about 20 kms
          from the Campus. Brahmavar lies between Udupi in the south and
          Kundapura in the north, on NH 66.
        </div>
        <button className="facilities-button">Read more</button>
      </div>
    </div>
  );
}

export default FacilitiesComponent;
