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
    let orderUpdated = order.map((item) => {
      if (item.id === element.id) {
        if (item.status === "pending") {
          item.status = "Preparando";
        }else if(item.status === "Preparando"){
          item.status = "Pronto"
        }
         updateStatusOrder(item.id, item.status).then((data) => {
         console.log(data)
        })
      }
      return item
    });
    console.log('novo order')
    console.log(orderUpdated)
    return setOrder(orderUpdated)
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
