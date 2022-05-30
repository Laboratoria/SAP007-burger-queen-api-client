import Button from "../components/Button";
// import TemplateOrder from '../components/TemplateOrder';
// import handleProduct from "./hall";
// import listOrder from "./hall";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";


function Kitchen() {
  const navigate = useNavigate();
  // const [order, setOrder] = useState([]);
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  // allOrders(){}
  return (
    <div>
      <p>Cozinha</p>
      {/* <section>
        {order.map((item) => {
          return (
            <TemplateOrder
              key={item.id}
              product={item}
              onClick={() => handleProduct(item)}
            />
          )
        })}
      </section> */}
      <Button children="sair" onClick={handleLogout} />
    </div>
  );
}

export default Kitchen;