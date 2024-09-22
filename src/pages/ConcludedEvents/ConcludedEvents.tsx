import "./ConcludedEvents.css"
import MSPGallery from "./CE-MSPGallery/CE-MSPGallery"
import { 
 infrastructureFacilty2,
 infrastructureFacilty3,
 } from "../../assets";

function ConcludedEvents (){
  const galleryImages2 = [
    {
        img : 'https://littlerock.edu.in/wp-content/uploads/2024/09/td2.jpg'
    },
    {
        img : infrastructureFacilty2
    },
    {
        img : infrastructureFacilty3
    },
    {
        img : infrastructureFacilty3
    },
    {
        img : infrastructureFacilty3
    },
    {
        img : infrastructureFacilty3,
    },
    {
        img : infrastructureFacilty3,
    },
    {
        img : 'https://littlerock.edu.in/wp-content/uploads/2024/09/td13.jpg'
    },
    ]

  return (
    <div>
      <div className="concluded-events-header-text">
        <h1>Concluded Events</h1>
      </div>
      <div>
        <div className="concluded-events-container">
          <hr />
          <h2>Teacher’s Day 2024</h2>
          <MSPGallery images={galleryImages2}/>
        </div>
        <hr />
        <div className="concluded-events-container">
          <h2>Independence Day Celebrations 2024</h2>
          <MSPGallery images={galleryImages2}/>
        </div>
      </div>
    </div>
  )
}

export default ConcludedEvents