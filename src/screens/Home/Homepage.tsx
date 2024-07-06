import CarouselComponent from "../../components/CarouselComponent";
import QuickLinksComponent from "../../components/QuickLinksComponent";
import EventsComponent from "../../components/EventsComponent";
import CircularsComponent from "../../components/CircularsComponent";
import AboutSchoolComponent from "../../components/AboutSchoolComponent";
import FacilitiesComponent from "../../components/FacilitiesComponent";
import AdmissionsComponent from "../../components/AdmissionsComponent";

function Homepage() {
  return (
    <div>
      <h2>Homepage</h2>
      <CarouselComponent />
      <QuickLinksComponent />
      <EventsComponent />
      <CircularsComponent />
      <AboutSchoolComponent />
      <FacilitiesComponent />
      <AdmissionsComponent />
    </div>
  );
}

export default Homepage;
