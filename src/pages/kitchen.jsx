import { allOrders, updateOrder } from "../services/api";
import jake from "../img/jake.jpg";
import TemplateKitchen from "../components/TemplateKitchen";
import Header from "../components/Header";
import { preparationTime } from "../components/Time";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Kitchen() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);

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

  const orderByStatus = (item, status) => {
    console.log("entrou")
    updateOrder(item.id, status)
    .then((response) => {
      console.log(response)
      if (response.status === 200) {
        const results = order.map((result) => {
          if (result.id === item.id) {
            result.status = status;
          }
          return result;
        });
        setOrder(results);
      }
    });
  };
  
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
          const orderPreparing = item.status === "preparing";
          const orderPending = item.status === "pending";
          let newState = "";
          if(orderPending){
            newState = "preparing"
          }
          if (orderPreparing){
            newState = "ready"
          }
          return (
            <TemplateKitchen
              key={item.id}
              id={item.id}
              client={item.client_name}
              table={item.table}
              status={item.status}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              processedAt={orderReady ? item.processedAt : ""}
              update={() => orderByStatus(item, newState)}
              preparedAt={
                orderReady
                  ? preparationTime(item.processedAt, item.createdAt)
                  : ""
              }
              products={item.Products}
              />
              );
            })}
      </section>
      <div className="logout" onClick={handleLogout}>
        <FaSignInAlt size="26px" margin-rigth="0px" />
      </div>
    </div>
  );
}

export default Kitchen;
