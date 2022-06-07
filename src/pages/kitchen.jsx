import { allOrders } from "../services/api";
import CardOrder from '../components/CardOrder';
import jake from "../img/jake.jpg";
import TemplateKitchen from "../components/TemplateKitchen";
import Header from "../components/Header";
// import {preparationTime} from "../components/Time"
import { useState, useEffect, useCallback } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Kitchen() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const [orderByStatus, setOrderByStatus] = useState([]);
  console.log(orderByStatus);
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(() => {
    allOrders()
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

  const filterByStatus = useCallback(
    (status) => {
      const results = order.filter((item) => item.status === status);
      setOrderByStatus(results);
      console.log(filterByStatus());
    },
    [order]
  );


  return (
    <div>
      <Header
        children="PEDIDOS"
        img={jake}
        alt={"Jake comendo pizza com sorvete"}
      />
      <section className="sectionTemplateKitchen">
        {order.map((item, index) => {
          const orderReady = item.status === "ready"
          const infoCommand = item.Products.map((product) => {
            return <TemplateKitchen key={product.id} products={item} />;
          });
          return (
            <CardOrder
              key={index}
              status={item.status}
              id={item.id}
              name={item.name}
              table={item.table}
              createdAt={item.createdAt}
              processedAt={orderReady ? (item.processedAt) : ""}
              preparedAt={orderReady ?(item.processedAt, item.createdAt) : ""}
              orderProducts={infoCommand}
            />
          )
        })}
      </section>

      <div className="logout" onClick={handleLogout}>
        <FaSignInAlt size="26px" margin-rigth="0px" />
      </div>

    </div>
  );
}
export default Kitchen;
