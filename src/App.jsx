import {BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "../src/pages/login"
import Register from "../src/pages/register"

import Footer from "./components/Footer"

function App() {
  return (
      <BrowserRouter>
      <Login/>
            <Routes>
            <Route  exact path="/login" element={<Login/>}/>
            <Route  path="/register" element={<Register/>}/>
          </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
