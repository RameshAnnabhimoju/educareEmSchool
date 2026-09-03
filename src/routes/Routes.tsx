import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import LoginPage from "../pages/Login/LoginPage";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";
import Management from "../pages/Management/Management";
import Achievements from "../pages/Achievements/Achievements";
import InfrastructureDetails from "../pages/InfrastructureDetails/InfrastructureDetails";
import AboutSchool from "../pages/AboutSchool/AboutSchool";
import InfrastructureFacility from "../pages/InfrastructureFacility/InfrastructureFacility";
import Transportation from "../pages/Transportation/Transportation";
import AdmissionProcess from "../pages/AdmissionProcess/AdmissionProcess";
import FeeStructure from "../pages/FeeStructure/FeeStructure";
import TransferAdmission from "../pages/TransferAdmission/TransferAdmission";
import UpComingEvents from "../pages/UpComingEvents/UpComingEvents";
import ConcludedEvents from "../pages/ConcludedEvents/ConcludedEvents";
import ContactUs from "../pages/ContactUs/ContactUs";
import ComingSoon from "../pages/ComingSoon/ComingSoon";
import MandatoryPublicDisclosure from "../pages/MandatoryPublicDIsclosure/MandatoryPublicDisclosure";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} errorElement={<ErrorPage />} />
      <Route
        path="/login"
        element={<LoginPage />}
        errorElement={<ErrorPage />}
      />
      <Route element={<PrivateRouter />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/management" element={<Management />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route
        path="/infrastructureDetails"
        element={<InfrastructureDetails />}
      />
      <Route path="/aboutSchool" element={<AboutSchool />} />
      <Route
        path="/infrastructureFacility"
        element={<InfrastructureFacility />}
      />
      <Route path="/transportation" element={<Transportation />} />
      <Route path="/admissionProcess" element={<AdmissionProcess />} />
      <Route path="/feeStructure" element={<FeeStructure />} />
      <Route path="/transferAdmission" element={<TransferAdmission />} />
      <Route path="/upComingEvents" element={<UpComingEvents />} />
      <Route path="/concludedEvents" element={<ConcludedEvents />} />
      <Route path="/contactUS" element={<ContactUs />} />
      <Route path="/comingSoon" element={<ComingSoon />} />

      <Route
        path="/society-certificate"
        element={<MandatoryPublicDisclosure />}
      />
      <Route path="/smc" element={<MandatoryPublicDisclosure />} />
      <Route path="/pta" element={<MandatoryPublicDisclosure />} />
      <Route path="/strength-details" element={<MandatoryPublicDisclosure />} />
      <Route path="/staff-details" element={<MandatoryPublicDisclosure />} />
      <Route path="/infrastructure" element={<MandatoryPublicDisclosure />} />
      <Route
        path="/mandatory-public-disclosure"
        element={<MandatoryPublicDisclosure />}
      />
      <Route
        path="/academic-calendar"
        element={<MandatoryPublicDisclosure />}
      />
      <Route path="/fee-structure" element={<MandatoryPublicDisclosure />} />
      <Route
        path="/sanitary-certification"
        element={<MandatoryPublicDisclosure />}
      />
      <Route path="/fire-safety" element={<MandatoryPublicDisclosure />} />
      <Route path="/noc" element={<MandatoryPublicDisclosure />} />
      <Route path="/drinking-water" element={<MandatoryPublicDisclosure />} />
      <Route
        path="/building-safety-certificate"
        element={<MandatoryPublicDisclosure />}
      />
      <Route
        path="/global-recognition"
        element={<MandatoryPublicDisclosure />}
      />
      <Route path="/affidavit" element={<MandatoryPublicDisclosure />} />
      <Route
        path="/water-sample-test"
        element={<MandatoryPublicDisclosure />}
      />
      <Route path="/land-certificate" element={<MandatoryPublicDisclosure />} />
      <Route path="/self-certificate" element={<MandatoryPublicDisclosure />} />
      <Route path="/cbse-affiliation" element={<MandatoryPublicDisclosure />} />
    </Routes>
  );
};
export default AppRoutes;
