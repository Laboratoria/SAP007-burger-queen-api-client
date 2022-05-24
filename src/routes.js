import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";
import PrivateRoute from "./services/private.js";
import Login from "./pages/login/index.js";
import Register from "./pages/register/index.js";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/panel" element={<PrivateRoute />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
