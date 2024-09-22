
import {class1, class2, class3, class4, class5, class6, aboutSchool1, aboutSchool2} from "../../assets";import "./AboutSchool.css"
import Carousel from "react-multi-carousel";
function AboutSchool()  {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <div className="about-class-container">
      <div className="about-school-header-text">
        <h1>About School</h1>
      </div>
      <h1>Educare EM School</h1>
      <div className="about-school-content-container">
        <div className="about-school-image-content">
          <img src={aboutSchool1} alt="" className="aboutschool-images" />
          <img src={aboutSchool2} alt="" className="aboutschool-images"  />
        </div>
        <div className="about-school-text-content">
          <p>
            <strong>Campus, its Location:</strong>
            The beautidul campus,situated in Tatipaka Village in Razole ,Dr. B.R. Ambedkar Konaseema District is the home of Educare EM School.
          </p>
          <p>Our school is a place where students can learn and grow in a safe and supportive
            environment. We strive to provide a high-quality education that prepares students for
            success in their future careers.
          </p>
          <p><strong>Objectives</strong></p>
          <p>a) To provide excellent educational opportunity for the children, in and around Brahmavar, its neighbouring areas and also children from all over India.</p>
          <p>b) To provide an education that will build up national unity.</p>
          <p>c) To shape God-fearing, patriotic and responsible citizens.</p>
          <p>d) To cater to the needs of the parents who want for their children, an education that makes a difference.</p>
        </div>      
      </div>
      <Carousel className="about-school-carousel-container" responsive={responsive} >
      <img src={class1} alt="carouser_Image_1" className="about-school-carousel-image" />
      <img src={class2} alt="carouser_Image_1" className="about-school-carousel-image" />
      <img src={class3} alt="carouser_Image_1" className="about-school-carousel-image" />
      <img src={class4} alt="carouser_Image_1" className="about-school-carousel-image" />
      <img src={class5} alt="carouser_Image_1" className="about-school-carousel-image" />
      <img src={class6} alt="carouser_Image_1" className="about-school-carousel-image" />
     </Carousel>;
    </div>
  )
}

export default AboutSchool