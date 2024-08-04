import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
