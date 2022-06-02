import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import Hall from "./pages/Hall";
import Kitchen from "./pages/Kitchen";
import ReadyOrders from "./pages/ReadyOrders";
import OrdersDelivered from "./pages/OrdersDelivered";
import Notfound from "./pages/404page";
// import { PrivateOutlet } from "./components/PrivateRoute";

// Testando rotas privadas com componentes aninhados (nested components)
// https://blog.utsavkumar.tech/private-routes-in-react-router-v6

import { PrivateRoute } from "./components/PrivateRoute";

const AllRoutesApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/hall"
            element={
              <PrivateRoute permission={["atendente"]}>
                <Hall />
              </PrivateRoute>
            }
          />
          <Route
            path="/kitchen"
            element={
              <PrivateRoute permission={["cozinheiro"]}>
                <Kitchen />
              </PrivateRoute>
            }
          />
          <Route
            path="/readyorders"
            element={
              <PrivateRoute permission={["atendente", "cozinheiro"]}>
                <ReadyOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/ordersdelivered"
            element={
              <PrivateRoute permission={["atendente", "cozinheiro"]}>
                <OrdersDelivered />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutesApp;

/*

// TESTANDO ROTAS PRIVADAS COM O OUTLET  - 02/06
// https://blog.utsavkumar.tech/private-routes-in-react-router-v6

const AllRoutesApp = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/*" element={<PrivateOutlet />}>
             <Route path="/kitchen" element={<Kitchen />} />
             <Route path="/readyorders" element={<ReadyOrders />} />
             <Route path="/ordersdelivered" element={<OrdersDelivered />} />
          </Route>
          <Route path="*" element={<Notfound />} />


        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutesApp;  

-------------


/* 
ESTAVA ASSIM 02/06

const AllRoutesApp = () => {
  const PrivateRoute = (props) => {
    const token = localStorage.getItem("token");
    return token ? (
      <Routes>  // coloquei <Routes> pq dizia que <Route> nao renderiza diretamente, mas deu erro do mesmo jeito.
        <Route {...props} />
      </Routes>
    ) : (
      <Navigate to={{ pathname: "/", state: { from: props.location } }} />
    );
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hall" element={<Hall />} />
          <Route
            path="/kitchen"
            element={
              <PrivateRoute NavigateTo="/">
                <Kitchen />
              </PrivateRoute>
            }
          />
          <Route
            path="/readyorders"
            element={
              <PrivateRoute NavigateTo="/">
                <ReadyOrders />
              </PrivateRoute>
            }
          />
          <Route
            path="/ordersdelivered"
            element={
              <PrivateRoute NavigateTo="/">
                <OrdersDelivered />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AllRoutesApp;

----------------------------------------------------------------

/*
// estava assim 26/05
// sem declarar a "const token" - como refiz acima 

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

-------

/* 

// Primeira versão sem rotas privadas 

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
