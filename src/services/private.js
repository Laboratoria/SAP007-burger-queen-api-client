// import { Route, useNavigate } from "react-router-dom";

// //   const token = () => localStorage.getItem('token');
// const isAuthenticated = () => {
//   const token = localStorage.getItem("token");
//   if (token !== null && token !== "undefined") {
//     return true;
//   }
//   return false;
// };

// const role = () => localStorage.getItem("role");

// const PrivateRoute = (props) => {
//     const navigate = useNavigate()
//   if (isAuthenticated) {
//     if (role() === "kitchen") {
//       if (props.path === "/kitchen") {
//         return <Route {...props} />;
//       }
//       return navigate('/kitchen', { message: "redirecionado" });
//     }
//     if (role() === "waitress") {
//       if (props.path === "/waitress") {
//         return <Route {...props} />;
//       }
//       return navigate('/waitress', { message: "redirecionado" });
//     }
//   }
//   return navigate('/', { message: "redirecionado" });
// };

// export default PrivateRoute;
