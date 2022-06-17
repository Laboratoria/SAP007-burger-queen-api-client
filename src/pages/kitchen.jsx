import { allOrders, updateOrder } from "../services/api";
import jake from "../img/jake.png";
import TemplateKitchen from "../components/TemplateKitchen";
import Header from "../components/Header";
import { preparationTime, formatDateHour } from "../components/Time";
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
      .then((data) => {
        const showOrders = data.filter((order) => {
          const toBeDone = order.status === "pending" || order.status === "preparing"
          return toBeDone
        })
        setOrder(showOrders)
      })
        .then((data) => {
          const sortByStatus = [...data]
          sortByStatus.sort((a, b) => b.id - a.id)
          setOrder(sortByStatus)
        })
  }, [])


  const orderByStatus = (item, status) => {
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
    <body id="bodyKitchen">
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
            if (orderPending) {
              newState = "preparing"
            } else if (orderPreparing) {
              newState = "ready"
            } else { newState = "ready" }
            return (
              <TemplateKitchen
                key={item.id}
                id={item.id}
                client={item.client_name}
                table={item.table}
                status={item.status}
                createdAt={formatDateHour(item.createdAt)}
                updatedAt={formatDateHour(item.updatedAt)}
                update={() => orderByStatus(item, newState)}
                processedAt={orderReady ? formatDateHour(item.processedAt) : ""}
                preparedAt={orderReady ? preparationTime(item.processedAt, item.updatedAt) : ""}
                products={item.Products}
              />
            );
          })}
        </section>
        <div className="logout" id="logout" onClick={handleLogout}>
          <FaSignInAlt size="26px" margin-rigth="0px" />
        </div>
      </div>
    </body>
  );
}

export default Kitchen;
