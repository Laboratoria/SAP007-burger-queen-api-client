import React from "react";
import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";

import Login from "./Login";
import Waiter from "./Waiter";
import Chef from "./Chef";
import Admin from "./Admin";
import NotFound from "./Notfound";

const Routes = () => {
   return(
      <BrowserRouter>
        <RoutesDOM>
          <Route element={<Login />} path="/" exact />
          <Route element={<Waiter />} path="/waiter" />
          <Route element={<Chef />} path="/chef" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<NotFound />} path="/not-found" />
        </RoutesDOM>
      </BrowserRouter>
   );
}

export default Routes;