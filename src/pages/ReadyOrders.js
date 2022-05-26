import Header from "../components/header/Header";
import {
  DefaultTitle,
  ParagraphReadyOrders,
  DefaultParagraph,
  OrderSummaryH2,
} from "../components/style-html-elements/elements-style";
import { GetOrders, OrderStatusUpdate } from "../services/products";
import { useState, useEffect } from "react";
import {
  BackgroundCard,
  DivProductKitchen,
} from "../components/modal-menu/body/MenuCardModalStyle";
import { BtnSendOrderToKitchenAndPrepareIt } from "../components/button/ButtonStyle";
import { Link } from "react-router-dom";
import StyleBackgroundImg from "../components/img-background/style-bg-img";

const ReadyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    GetOrders().then((json) => {
      const FinishedOrders = json.filter(
        (item) => item.status === "Finalizado"
      );
      setOrders(FinishedOrders);
    });
  }, []);

  const changeStatus = (item, index) => {
    OrderStatusUpdate(item.id, "Entregue").then(() => {
      const updatedList = [...orders];
      updatedList.splice(index, 1);
      setOrders(updatedList);
    });
  };

  return (
    <>
      <StyleBackgroundImg />
      <Header showLogOut={true} />
      <div className="container">
        <DefaultTitle>Pedidos Prontos</DefaultTitle>
        <Link to="/hall">
          <div style={{ color: "#ce8e43", textAlign: "left" }}> Voltar</div>
        </Link>
      </div>

      <section className="container">
        {orders.map((item, index) => (
          <BackgroundCard key={item.id}>
            <DivProductKitchen>
              <OrderSummaryH2>Pedido {item.id} </OrderSummaryH2>
              <ParagraphReadyOrders>
                {item.status} em: {new Date(item.updatedAt).toLocaleString()}
              </ParagraphReadyOrders>

              <DefaultParagraph>Nome: {item.client_name}</DefaultParagraph>
              <DefaultParagraph>Mesa: {item.table}</DefaultParagraph>

              <div className="container">
                {item.Products.map((product) => (
                  <span key={product.id}>
                    <p>
                      {product.qtd} {product.name} {product.flavor}{" "}
                      {product.complement}
                    </p>
                  </span>
                ))}
              </div>

              <div>
                <BtnSendOrderToKitchenAndPrepareIt
                  onClick={() => changeStatus(item, index)}
                >
                  {" "}
                  Entregar{" "}
                </BtnSendOrderToKitchenAndPrepareIt>
              </div>
            </DivProductKitchen>
          </BackgroundCard>
        ))}
      </section>
    </>
  );
};

export default ReadyOrders;
