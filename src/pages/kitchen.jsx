import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { allOrders } from "../services/api";
import { useState, useEffect, useCallback } from "react";


function Kitchen() {

  const navigate = useNavigate();
  const [order, setOrder] = useState([]);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  const pushedAllOrders = useCallback(() =>{
    allOrders()
      .then((response) => response.json())
      .then((data) => {
        setOrder(
          data.filter((item) => {
            console.log(item)
            return order;
          }),
        );
      });
    },[order] )
    
    useEffect(() => {
      pushedAllOrders()
      console.log(order)
    },[pushedAllOrders, order]);
    
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
