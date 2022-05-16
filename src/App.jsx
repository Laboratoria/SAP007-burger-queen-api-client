import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "../src/pages/login"
import Register from "../src/pages/register"

import Footer from "./components/Footer"

function App() {
  return (
      <BrowserRouter>
            <Routes>
            <Route  exact path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
