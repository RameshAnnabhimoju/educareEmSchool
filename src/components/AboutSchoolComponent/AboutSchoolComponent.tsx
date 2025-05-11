import { school } from "../../assets";
import "./AboutSchoolComponent.css";
function AboutSchoolComponent() {
  return (
    <div id="about-school-container">
      <div id="about-school-text">
        <strong> Educare EM School</strong>, a leading Educational Institution
        in the region was founded by K. Murarii is a premier educational
        institution committed to delivering high-quality education and holistic
        development. With a strong foundation in academic excellence, our school
        provides a nurturing environment where students can explore, innovate,
        and grow into responsible global citizens.
      </div>
      <div id="about-school-card">
        <div>
          <img src={school} alt="" id="about-school-card-image" />
        </div>
        <div id="about-school-card-text">
          To quote the words of the Founder, “At Educare Global School, we
          believe in fostering curiosity, creativity, and leadership, shaping
          the future one student at a time.”{" "}
          <strong> Educare EM School </strong> strives to provide the best
          possible facilities to its students, including a highly qualified
          teaching faculty, with the ultimate aim of providing an education of
          the highest order. Nestled in a serene and green campus, our
          institution blends modern education with core values, ensuring
          students receive a balanced and enriching learning experience. Our
          passionate educators and well-structured curriculum empower young
          minds with the right attitude, skills, and knowledge to excel in an
          ever-evolving world.
        </div>
      </div>
    </div>
  );
}

export default AboutSchoolComponent;
