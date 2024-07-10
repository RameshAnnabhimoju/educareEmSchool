import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
// import QuickLinksComponent from "../../components/QuickLinksComponent";
// import EventsComponent from "../../components/EventsComponent";
// import CircularsComponent from "../../components/CircularsComponent";
// import AboutSchoolComponent from "../../components/AboutSchoolComponent";
// import FacilitiesComponent from "../../components/FacilitiesComponent";
import AdmissionsComponent from "../../components/AdmissionsComponent/AdmissionsComponent";

function Homepage() {
  return (
    <div>
      <CarouselComponent />
      {/* <QuickLinksComponent />
      <EventsComponent />
      <CircularsComponent />
      <AboutSchoolComponent />
      <FacilitiesComponent /> */}
      <AdmissionsComponent />
    </div>
  );
}

export default Homepage;
