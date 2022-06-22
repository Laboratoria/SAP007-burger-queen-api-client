import { BrowserRouter , Route, Routes } from "react-router-dom"
import Home from "../pages/home/home.jsx"
import Login from "../pages/login/login.jsx"
import Register from "../pages/register/register.jsx"
import Hall from "../pages/hall/hall.jsx"
import Kitchen from "../pages/kitchen/kitchen.jsx"

const AllRoutes = () => {
    return (

        <BrowserRouter>     
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/hall" element={<Hall/>} />
                    <Route path="/kitchen" element={<Kitchen/>} />
                </Routes>
        </BrowserRouter>

    )

}


export default AllRoutes;