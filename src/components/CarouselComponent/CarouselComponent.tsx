import Carousel from "react-bootstrap/Carousel";
import { class1, class2, class3 } from "../../assets";
import "./CarouselComponent.css";
function CarouselComponent() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img src={class3} alt="carouser_Image_1" className="carousel_Image" />
        <Carousel.Caption>
          <h3>Educare Em School</h3>
          <p>
            strives to provide the best possible facilities to its students,
            including a highly qualified teaching faculty, with the ultimate aim
            of providing an education of the highest order.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={class1} alt="carouser_Image_2" className="carousel_Image" />
        <Carousel.Caption>
          <h3>Educare Em School</h3>
          <p>strives to provide the best possible facilities to its students,
            including a highly qualified teaching faculty, with the ultimate aim
            of providing an education of the highest order.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={class2} alt="carouser_Image_3" className="carousel_Image" />
        <Carousel.Caption>
          <h3>Educare Em School</h3>
          <p>
          strives to provide the best possible facilities to its students,
            including a highly qualified teaching faculty, with the ultimate aim
            of providing an education of the highest order.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
