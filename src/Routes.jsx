import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Hall from "./pages/Hall";
import Kitchen from "./pages/Kitchen";
import ReadyOrders from "./pages/ReadyOrders";
import OrdersDelivered from "./pages/OrdersDelivered";
import PrivateRoute from "./privateRoute";

const AllRoutesApp = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/hall"
            element={
              <PrivateRoute redirectTo="/">
                <Hall />
              </PrivateRoute>
            }
          />
          <Route
            path="/kitchen"
            element={
              <PrivateRoute redirectTo="/">
                <Kitchen />
              </PrivateRoute>
            }
          />
          <Route
            path="/readyorders"
            element={
              <PrivateRoute redirectTo="/">
                <ReadyOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/ordersdelivered"
            element={
              <PrivateRoute redirectTo="/">
                <OrdersDelivered />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutesApp;

/* 
const AllRoutesApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path='/readyorders' element={<ReadyOrders />} />
          <Route path='/ordersdelivered' element={<OrdersDelivered />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutesApp;  
*/
