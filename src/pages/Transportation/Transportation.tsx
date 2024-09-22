 
import {transportation1, transportation2, transportation3, transportation4, transportation5 } from "../../assets";
import "./Transportation.css"
import Carousel from "react-multi-carousel";


function Transportation() {
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
  };
  return (
    <div className="transportaion-container">
      <div className="transportation-header-text">
        <h1>Transportation</h1>
      </div> 
     <Carousel className="transportation-carousel-container" responsive={responsive} >
      <img src={transportation1} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={transportation2} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={transportation3} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={transportation4} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={transportation5} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={transportation2} alt="carouser_Image_1" className="transportation-carousel-image" />
     </Carousel>;
      
      <p>School buses transport children and staff from a radius of 25 to 30 kms daily to and from the School.
         The School owns 50 buses now. Details of routes and charges can be obtained from the School Office</p>
    </div>
  )
}

export default Transportation