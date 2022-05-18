import React from "react";
import { Route, BrowserRouter, Routes as RoutesDOM } from "react-router-dom";

import Login from "./Login";
import Waiter from "./Waiter";
import Chef from "./Chef";
import Admin from "./Admin";
import NotFound from "./Notfound";
import ListUsers from "./Admin/Listusers";
import CreateUser from "./Admin/Createuser";
import UpdateUser from "./Admin/Updateuser";
import DeleteUser from "./Admin/Deleteuser";
import WaiterMenu from "./Waiter/Menu";
import WaiterOrder from "./Waiter/Order";
import ChefAllOrders from "./Chef/Allorders";
import ChefDelivered from "./Chef/Delivered";
import ChefReady from "./Chef/Ready";
import ChefPending from "./Chef/Pending";
import ChefPreparation from "./Chef/Preparation";

const Routes = () => {
   return(
      <BrowserRouter>
        <RoutesDOM>
          <Route element={<Login />} path="/" exact />
          <Route element={<Waiter />} path="/waiter" />
          <Route element={<Chef />} path="/chef" />
          <Route element={<Admin />} path="/admin" />
          <Route element={<NotFound />} path="/not-found" />
          <Route element={<ListUsers />} path="/list-users" />
          <Route element={<CreateUser />} path="/create-user" />
          <Route element={<UpdateUser />} path="/update-user" />
          <Route element={<DeleteUser />} path="/delete-user" />
          <Route element={<WaiterMenu />} path="/menu" />
          <Route element={<WaiterOrder />} path="/order" />
          <Route element={<ChefAllOrders />} path="/all-orders" />
          <Route element={<ChefDelivered />} path="/delivered" />
          <Route element={<ChefReady />} path="/ready" />
          <Route element={<ChefPending />} path="/pending" />
          <Route element={<ChefPreparation />} path="/preparation" />
        </RoutesDOM>
      </BrowserRouter>
   );
}

export default Routes;