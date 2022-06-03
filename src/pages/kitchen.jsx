import { useNavigate } from "react-router-dom";
import { allOrders } from "../services/api";
import TemplateKitchen from '../components/TemplateKitchen';
import { useState, useEffect } from "react";
import {FaSignInAlt} from "react-icons/fa"


function Kitchen() {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  //const [orderByStatus, setOrderByStatus] = useState([]);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

    useEffect(() => {
      allOrders()
      .then((response) => response.json())
      .then((data) => setOrder(data))
    },[]);
    
    useEffect(() => { 
      console.log(order)
    },[order]);
    
  //   const filterByStatus = useCallback((status) =>{
  //     const results = order.filter((item)=>item.status === status)
  //     setOrderByStatus(results)
  //  },[order])
  return (
    <div>
      <p>Cozinha</p>
      <section>
        {order.map((item) => {
          return (
            <TemplateKitchen
              key={item.id}
              product={item}
            // onClick={() =>pushedAllOrders(item)}
            />
          )
        })}
      </section>
      <div className="logout"onClick={handleLogout} >
      <FaSignInAlt size="26px"margin-rigth="0px"/>
      </div>
    </div>

  );
}
export default Kitchen;