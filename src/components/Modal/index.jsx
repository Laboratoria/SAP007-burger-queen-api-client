import style from "./style.module.css";
import TemplateKitchen from "../TemplateKitchen";
import { allOrders, updateOrder } from "../../services/api";
import { useState, useEffect } from "react";
import { formatDateHour, preparationTime } from "../Time";
import Button from '../Button';
import button from "../Button/button.module.css";


const Modal = ({ isOpen, onClickClose }) => {

  const [order, setOrder] = useState([]);

  function filterOrders(option) {
    allOrders()
      .then((response) => response.json())
      .then((data) => {
        setOrder(
          data.filter((item) => {
            return item.status === option;
          })
        )
      })
  }
  useEffect(() => {
    filterOrders("ready");
  }, []);

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
        <nav className='navMenu'>
          <Button children="PRONTO" className={button.btnMenu} onClick={() => filterOrders("ready")} />
          <Button children="ENTREGUE" className={button.btnMenu} onClick={() => filterOrders("delivered")} />
        </nav>
        <section className={style.infosHistoric}>
          {order.map((item) => {
            const orderReady = item.status === "ready";
            const orderDelivered = item.status === "delivered";
            let newState = "";
            if (orderReady) {
              newState = "delivered"
            } else if (orderDelivered) {
              newState = "deliverd"
            }
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
          }
          )}
        </section>
      </div>
    </div>
  );
};
export default Modal;
