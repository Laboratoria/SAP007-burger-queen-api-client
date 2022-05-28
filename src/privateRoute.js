import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  return isAuthenticated ? children : < Navigate to = {redirectTo} />
}

export default PrivateRoute;