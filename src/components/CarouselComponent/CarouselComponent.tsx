import Carousel from "react-bootstrap/Carousel";
import { school, class1, class2 } from "../../assets";
import "./CarouselComponent.css";
function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={school} alt="carouser_Image_1" className="carousel_Image" />
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
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={class2} alt="carouser_Image_3" className="carousel_Image" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
