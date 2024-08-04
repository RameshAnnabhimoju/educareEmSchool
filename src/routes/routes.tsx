import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Home/Homepage";
import LoginPage from "../pages/Login/LoginPage";
import ErrorPage from "../pages/Error/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard/Dashboard";

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
    </Routes>
  );
};
export default AppRoutes;
