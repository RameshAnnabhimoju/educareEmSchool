import { school } from "../../assets";
import "./AboutSchoolComponent.css";
function AboutSchoolComponent() {
  return (
    <div id="about-school-container">
      <div id="about-school-text">
        <strong> Educare EM School</strong>, a leading Educational Institution
        in the region was founded by Late Dr C.T. Abraham, who had extensive
        experience in the field of education in India and the USA. The natural
        aura of the beautiful serene, green campus blended with its passion to
        provide the best for the students to learn and explore has truly created
        a powerful atmosphere for everyone to nurture their skills and excel.
        LRIS shapes professionals who are an optimum mix of right attitude,
        skill, culture and knowledge.
      </div>
      <div id="about-school-card">
        <img src={school} alt="" id="about-school-card-image" />
        <div id="about-school-card-text">
          To quote the words of the Founder, “This campus and everything that
          you see here is the gift of God. We are mere instruments in His
          hands.” <strong> Educare EM School </strong> strives to provide the
          best possible facilities to its students, including a highly qualified
          teaching faculty, with the ultimate aim of providing an education of
          the highest order.
        </div>
      </div>
    </div>
  );
}

export default AboutSchoolComponent;
