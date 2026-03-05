import { class1, schoolImage2 } from "../../assets";
import "./FacilitiesComponent.css";
function FacilitiesComponent() {
  return (
    <div id="facilities-container">
      <div className="facilities-card">
        <img src={class1} alt="" className="facilities-card-image" />
        <div className="facilities-card-title">Classrooms</div>
        <div className="facilities-card-text">
          At Educare EM School, we believe that a good learning environment
          shapes a child’s future. Our classrooms are bright, colorful, and
          designed to make learning enjoyable for young minds. Each classroom is
          equipped with comfortable seating, engaging educational visuals, and a
          structured setup that helps students focus while staying curious. The
          cheerful learning atmosphere encourages children to read, explore, and
          participate actively in their lessons. Under the guidance of our
          dedicated teachers and the leadership of K. Murarji, we strive to
          create a space where every child feels confident, supported, and
          inspired to learn.
        </div>
        {/* <button className="facilities-button">Read more</button> */}
      </div>
      <div className="facilities-card">
        <img src={schoolImage2} alt="" className="facilities-card-image" />
        <div className="facilities-card-title">
          Kindergarten Play & Activity Area
        </div>
        <div className="facilities-card-text">
          The Kindergarten Play Area at Educare EM School is specially designed
          to support the early development of young children through play,
          creativity, and interaction. This vibrant space includes safe play
          equipment, colorful activity corners, and engaging surroundings that
          stimulate imagination and motor skills. Children can explore,
          socialize, and learn through fun activities in a secure and nurturing
          environment. At Educare EM School, led by K. Murarji, we believe that
          play is an essential part of early childhood education, helping
          children grow happily while building confidence and curiosity about
          the world around them.
        </div>
        {/* <button className="facilities-button">Read more</button> */}
      </div>
    </div>
  );
}

export default FacilitiesComponent;
