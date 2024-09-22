import Carousel from "react-multi-carousel";
import {infrastrucutreDetails1, infrastrucutreDetails2, infrastrucutreDetails3, infrastrucutreDetails4, infrastrucutreDetails5} from "../../assets";
import "./InfrastructureDetails.css"

function InfrastructureDetail()  {
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
    <div className="infrastructure-details-container">
      <div className="infrastructure-details-header-text">
        <h1>Infrastructure Details</h1>
      </div>
      <Carousel className="infrastructure-carousel-container" responsive={responsive} >
      <img src={infrastrucutreDetails1} alt="carouser_Image_1" className="infrastructure-details-carousel-image" />
      <img src={infrastrucutreDetails2} alt="carouser_Image_1" className="infrastructure-details-carousel-image" />
      <img src={infrastrucutreDetails3} alt="carouser_Image_1" className="infrastructure-details-carousel-image" />
      <img src={infrastrucutreDetails4} alt="carouser_Image_1" className="infrastructure-details-carousel-image" />
      <img src={infrastrucutreDetails5} alt="carouser_Image_1" className="infrastructure-details-carousel-image" />
      <img src={infrastrucutreDetails1} alt="carouser_Image_1" className="infrastructure-details-carousel-image" />
     </Carousel>;
        <h1>Educare EM School</h1>
      <table className="infrastructure-details-table">
        <tr>
            <th>Room</th>
            <th> Number </th>
            <th>Length(in ft.)</th>
            <th>Breadth(in ft.)</th>
        </tr>
        <tr>
          <td rowSpan={6}>Class Room</td>
        </tr>
        <tr> 
          <td>35</td>
          <td>21</td>
          <td>20</td>
        </tr>
        <tr>
          <td>16</td>
          <td>21</td>
          <td>21</td>
        </tr>
        <tr>
          <td>16</td>
          <td>22</td>
          <td>21</td>
        </tr>
        <tr>
          <td>16</td>
          <td>26</td>
          <td>21</td>
        </tr>
        <tr>
          <td>3</td>
          <td>25</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Computer Lab</td>
          <td>1</td>
          <td>120</td>
          <td>60</td>
        </tr>
        <tr>
          <td>Physics Lab</td>
          <td>1</td>
          <td>102</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Chemistry Lab</td>
          <td>1</td>
          <td>102</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Biology Lab</td>
          <td>1</td>
          <td>102</td>
          <td>20</td>
        </tr>
        <tr>
          <td>Library</td>
          <td>1</td>
          <td>65</td>
          <td>41</td>
        </tr>
        <tr>
          <td>Auditorium</td>
          <td>1</td>
          <td>170</td>
          <td>65</td>
        </tr>
      </table>
    </div>
  );
}

export default InfrastructureDetail