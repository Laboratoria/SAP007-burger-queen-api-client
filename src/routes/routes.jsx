import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "../pages/home/home.jsx"
import Login from "../pages/login/login.jsx"
import Register from "../pages/register/register.jsx"


const AllRoutes = () => {
    return (

        <BrowserRouter>     
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
        </BrowserRouter>


    )

}


export default AllRoutes;