import { BrowserRouter, Routes, Route } from "react-router-dom";

// páginas
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
