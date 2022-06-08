import { allOrders } from "../services/api";
import jake from "../img/jake.jpg";
import TemplateKitchen from "../components/TemplateKitchen";
import Header from "../components/Header";
import { preparationTime } from "../components/Time";
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
        {order.map((item) => {
          const orderReady = item.status === "ready";
            return (<TemplateKitchen 
              key={item.id} 
              id={item.id}
              client={item.client_name}
              table={item.table}
              status={item.status}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              processedAt={orderReady ? item.processedAt : ""}
              preparedAt={orderReady ? preparationTime(item.processedAt, item.createdAt) : "" }
              products = {item.Products}
              />
            )
        }
      )}
      </section>
      <div className="logout" onClick={handleLogout}>
        <FaSignInAlt size="26px" margin-rigth="0px" />
      </div>
    </div>
  ); 
}

export default Kitchen;
