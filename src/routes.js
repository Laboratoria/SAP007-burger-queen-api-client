import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
    // Navigate
} from "react-router-dom";
import Login from './pages/login/index.js';
import Register from "./pages/register/index.js"
import Kitchen from "./pages/kitchen/index.js";
import Waitress from "./pages/waitress/index.js";
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
            <Route path="/kitchen" element={<Kitchen />} /> 
            <Route path="/waitress" element={<Waitress />} />

        </Routes>
    </BrowserRouter>
);

export default AppRoutes