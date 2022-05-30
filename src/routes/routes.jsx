import { BrowserRouter as Router, Route } from "react-router"
import Home from "../pages/home/home.jsx"
import Login from "../pages/login/login.jsx"
import Register from "../pages/register/register.jsx"


const AllRoutes = () => {
    return (
        <div>
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Router>
        </div>

    )

}


export default AllRoutes;