import style from "./style.module.css";
import TemplateKitchen from "../TemplateKitchen";
import {allOrders, updateOrder} from "../../services/api";
import { useState, useEffect } from "react";
import{formatDateHour, preparationTime} from "../Time";


const Modal = ({ children, isOpen, onClickClose }) => {
  
  const [order, setOrder] = useState([]);
  
  useEffect(() => {
    allOrders()
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

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
  


  if (isOpen) {
    return null;
  }
  return (
    <div className={style.DivModal}>
      <div className={style.DivModalContent}>
        <button className={style.btnModal} type="button" onClick={onClickClose}>
          X
        </button>
        <section>
        {order.map((item) => {
          const orderReady = item.status === "ready";
          const orderDelivered = item.status === "delivered";
          let newState = "";
          if (orderReady) {
            newState = "delivered"
          } else if (orderDelivered) {
            newState = "deliverd"
          } 
          return(
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
        }
        )}
        </section>
      </div>
    </div>
  );
};
export default Modal;
