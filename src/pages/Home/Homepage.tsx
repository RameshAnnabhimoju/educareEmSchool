import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import QuickLinksComponent from "../../components/QuicklinksComponent/QuickLinksComponent";
// import EventsComponent from "../../components/EventsComponent";
// import CircularsComponent from "../../components/CircularsComponent";
import AboutSchoolComponent from "../../components/AboutSchoolComponent/AboutSchoolComponent";
import FacilitiesComponent from "../../components/FacilitiesComponent/FacilitiesComponent";
import AdmissionsComponent from "../../components/AdmissionsComponent/AdmissionsComponent";
import CampusDetailsBannerComponent from "../../components/CampusDetailsBannerComponent/CampusDetailsBannerComponent";

function Homepage() {
  return (
    <div>
      <CarouselComponent />
      <QuickLinksComponent />
      {/* <EventsComponent />
      <CircularsComponent /> */}
      <AboutSchoolComponent />
      <CampusDetailsBannerComponent />
      <FacilitiesComponent />
      <AdmissionsComponent />
    </div>
  );
}

export default Homepage;
