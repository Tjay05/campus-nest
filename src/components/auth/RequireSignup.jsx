import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireSignup = () => {
  const { state } = useLocation();
  return state?.email ? <Outlet/> : <Navigate to="/auth?tab=signup" replace />;
};
 
export default RequireSignup;