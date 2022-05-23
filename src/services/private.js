import { Navigate } from "react-router-dom";
import Kitchen from "../pages/kitchen/index.js";
import Waitress from "../pages/waitress/index.js";

//   const token = () => localStorage.getItem('token');

const role = () => localStorage.getItem("role");
const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token !== null && token !== "undefined") {
    return true;
  }
  return false;
};

const PrivateRoute = () => {
  if (isAuthenticated) {
    if (role() === "kitchen") {
      return <Kitchen />;
    }
    if (role() === "waitress") {
      return <Waitress />;
    }
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
