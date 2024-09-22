import Carousel from "react-multi-carousel";
import { class1, class2, class3, class4, class5, class6,
  infrastructureFacilty1, infrastructureFacilty2, infrastructureFacilty3, infrastructureFacilty4,
   bioGasPLant, artAndCraft, atalThinkeringLab, seminarHall
 } from "../../assets";
import "./InfrastructureFacility.css"
import MSPGallery from "./MSPGallery/MSPGallery"

function InfrastructureFacility() {
    const galleryImages1 = [
      {
          img : class1
      },
      {
          img : class2
      },
      {
          img : class3
      },
      {
          img : class4
      },
    ]
    const galleryImages2 = [
      {
          img : infrastructureFacilty1
      },
      {
          img : infrastructureFacilty2
      },
      {
          img : infrastructureFacilty3
      },
      {
          img : infrastructureFacilty4
      },
      ]
    const galleryImages3 = [
      {
          img : class3
      },
      {
          img : class6
      },
      {
          img : class4
      },
      {
          img : class5
      },
    ]
  const galleryImagesText = [
    {
        img :   bioGasPLant ,
        text : 'Bio gas PLant'
    },
    {
        img : artAndCraft ,
        text : 'Art and craft Room'
    },
    {
        img : atalThinkeringLab ,
        text : 'Atal Tinkering Lab'
    },
    {
        img : seminarHall ,
        text :' Seminar Hall '
    },
  ]

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
    <div className="infrastructure-facility-container">
      <div className="infrastructure-facility-header-text">
        <h1>Infrastructure</h1>
      </div>
      <div className="infrastructure-facility-WSPGallery">
          <MSPGallery images={galleryImages1} />
          <h4>Well-ventilated classrooms, with lights and fans</h4>
      </div>
      <div className="infrastructure-facility-WSPGallery">
          <MSPGallery images={galleryImages2} />
          <h4>4 Computer Centres with 200 computers, printers, accessories with internet facility</h4>
      </div>
      <div className="infrastructure-facility-WSPGallery">
          <MSPGallery images={galleryImagesText}  />
      </div>

      <div className="infrastructure-facility-WSPGallery">
          <MSPGallery images={galleryImages3} />
          <h4>Separate Libraries for all the sections (5 libraries including KG Library)</h4>
      </div>
      <div className="infrastructure-facility-detailed-list">
        <ul className="infrastructure-facility-detailed-ul">
          <li>Well-ventilated classrooms, with lights and fans</li>
          <li>Separate Libraries for all the sections (5 libraries including KG Library)</li>
          <li>An exclusive Science and Technology Library</li>
          <li>Atal Tinkering Lab</li>
          <li>Seminar Hall</li>
          <li>Art and Craft Room</li>
          <li>Rain water harvesting</li>
          <li>Solar Power</li>
        </ul>
      </div>
      <Carousel className="transportation-carousel-container" responsive={responsive} >
      <img src={class1} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={class2} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={class3} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={class4} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={class5} alt="carouser_Image_1" className="transportation-carousel-image" />
      <img src={class6} alt="carouser_Image_1" className="transportation-carousel-image" />
     </Carousel>;
    </div>
  )
}

export default InfrastructureFacility