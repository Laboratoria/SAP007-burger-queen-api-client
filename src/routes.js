import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
    // Navigate
} from "react-router-dom";
import Login from './pages/Login/index.js';
import Register from "./pages/Register/index.js"
// import { isAuth } from "./Auth.js";


// const PrivateRoute = ({ element: Element, ...rest }) => (

//     <Route {...rest} render={props =>
//         isAuth() ? (
//             <Element {...props} />
//         ) : (
//             <Navigate to={{ pathname: '/login', state: { from: props.location } }} />
            
//         )} />
// )


const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
        </Routes>
    </BrowserRouter>
);

export default AppRoutes