import { Navigate, useLocation, useNavigate } from 'react-router-dom';




export const PrivateRoute = ({ children, permission }) => {
    const loginStatus  = localStorage.getItem("token");
    const rolePermission = permission.includes(localStorage.getItem("role")) ; 
    const { pathname } = useLocation();
    const navigate = useNavigate();
    console.log({ pathname });
    console.log(rolePermission, children, permission, localStorage.getItem("role"));
    if (loginStatus && rolePermission) {
      return children
    } else if (loginStatus && !rolePermission) {
      return navigate(-1) 
    } else {
      return <Navigate to="/login" state={{ from: pathname }} replace />
    }
  
  
  
  };