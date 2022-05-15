import { Route, Routes, BrowserRouter } from "react-router-dom";

// import Login from "./App";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Sobre }  path="/sobre" />
           <Route component = { Usuario }  path="/usuario" />
       </BrowserRouter>
   )
}

export default Routes;