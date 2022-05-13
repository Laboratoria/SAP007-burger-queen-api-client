import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const RoutesBurger = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/> 
        </Routes>
    </BrowserRouter>    

    );
};

    