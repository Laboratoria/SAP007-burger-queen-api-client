import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../src/pages/login"
import Register from "../src/pages/register"
import Kitchen from "../src/pages/kitchen"
import Hall from "../src/pages/hall"
import Footer from "./components/Footer"
// import AuthProvider from "../src/services/AuthProvider"

function App() {
  return (
      <BrowserRouter>
            <Routes>
            <Route  exact path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            {/* <AuthProvider> */}
            <Route  path="kitchen" element={<Kitchen/>}/>
            <Route  path="hall" element={<Hall/>}/>
            {/* </AuthProvider> */}
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
