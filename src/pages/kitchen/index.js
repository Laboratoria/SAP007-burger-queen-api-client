import logo from "../../Images/logotipo.png";
import logout from "../../Images/logout.jpg";
import { removeToken, removeName, removeRole } from "../../services/storage";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Order from "../../components/orders";
import { getOrders, updateStatusOrder } from "../../services/order";
import "./styles.modules.css";

function Kitchen() {
  const navigate = useNavigate();
  function logoutUser() {
    removeToken();
    removeName();
    removeRole();
    navigate("/", { message: "redirecionando" });
  }

  const [order, setOrder] = useState([]);

  function updateStatus(element) {
    order.map((item) => {
      if (item.id === element.id) {
        if (item.status === "pending") {
          item.status = "Preparando";
        }
      }
      return updateStatusOrder(item.id, item.status).then((data) => {
        setOrder(data);
      });
    });
  }

  useEffect(() => {
    getOrders().then((orders) => {
      console.log(orders);
      setOrder(orders);
    });
  }, []);

  return (
    <>
      <header className="header-pedidos">
        <img src={logo} alt="logotipo" className="logotype" />
        <navbar className="menu-kitchen">
          <h1 className="title">Cozinha</h1>
          <hr></hr>
        </navbar>
        <button className="logout" onClick={() => logoutUser()}>
          <img src={logout} alt="Deslogar"></img>
        </button>
      </header>
      <main>
        <section className="container-orders">
          {order.map((item) => {
            return <Order order={item} onClick={() => updateStatus(item)} />;
          })}
        </section>
      </main>
    </>
  );
}

export default Kitchen;
