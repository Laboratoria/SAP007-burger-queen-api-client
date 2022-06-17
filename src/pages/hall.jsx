import Button from "../components/Button";
import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import TemplateOrder from "../components/TemplateOrder"; import Modal from "../components/Modal";
import finn from "../img/finn.png"
import button from "../../src/components/Button/button.module.css";
import { getProduct, createOrder } from "../services/api";
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { FaSignInAlt,FaClipboardList } from "react-icons/fa";
import { errorMessage } from "../services/feedback";

function Hall() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ client: "", table: "" });
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [historic, setHistoric] = useState(false);
  const [error, setError] = useState("");
  console.log(error);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function PushedProducts(option) {
    getProduct()
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          data.filter((item) => {
            return item.type === option;
          })
        );
      });
  }

  useEffect(() => {
    PushedProducts("breakfast");
  }, []);

  const handleInfo = (e) => {
    return setInfo(() => {
      const auxInfo = { ...info };
      auxInfo[e.target.name] = e.target.value;
      console.log(auxInfo)
      return auxInfo;
    });
  };

  function handleProduct(product) {
    const newOrder = order;
    const productList = newOrder.find((item) => {
      return item.id === product.id;
    });
    if (productList) {
      productList.qtd += 1;
    } else {
      const newList = {
        id: product.id,
        name: product.name,
        price: product.price,
        flavor: product.flavor,
        complement: product.complement,
        qtd: 1,
      };
      newOrder.push(newList);
    }
    setOrder([...newOrder]);
  }

  function finalOrder() {
    function listOrder() {
      const openTable = {
        client: info.client,
        table: info.table,
        products: order.map((item) => {
          const infosOrder = {
            id: item.id,
            name: item.name,
            price: item.price,
            flavor: item.flavor,
            complement: item.complement,
            qtd: 1,
          };
          return infosOrder;
        }),
      };
      return openTable;
    }

    const resumeOrder = listOrder();

    createOrder(resumeOrder)
      .then(() => {
        navigate("/kitchen");
      })
      .catch((error) => {
        setError(errorMessage(error));
      });
  }

  function handleRemoveItem(item) {
    const productInList = order.find((element) => element.id === item.id);
    if (productInList) {
      if (productInList.qtd === 1) {
        order.splice(
          order.findIndex((element) => element.id === item.id),
          1
        );
        productInList.qtd = 0;
      }
      if (productInList.qtd > 1) {
        productInList.qtd -= 1;
      }
    }
    setOrder([...order]);
  }

  function totalValue() {
    const wholeAmount = [];
    for (let i = 0; i < order.length; i++) {
      const totalSum = order[i].qtd * order[i].price;
      wholeAmount.push(totalSum);
    }
    const valueInitial = 0;
    const wholeInitial = wholeAmount.reduce(
      (value, currentValue) => value + currentValue,
      valueInitial
    );
    return wholeInitial;
  }

  return (
    <div>
      <Header children="MENU" img={finn} alt={"Finn comendo um sanduíche"} />
      <nav className="navMenu">
        <Button children="CAFÉ" className={button.btnMenu} onClick={() => PushedProducts("breakfast")} />
        <Button children="+ MENU" className={button.btnMenu} onClick={() => PushedProducts("all-day")} />
      </nav>
      <section className="sectionCard">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              product={item}
              onClick={() => handleProduct(item)}
            />
          );
        })}
      </section>
      <div className="InfoClient">
        <Input
          placeholder="CLIENTE"
          type="text"
          name="client"
          value={info.client}
          onChange={handleInfo}
          required
        />
        <Input
          placeholder="MESA"
          type="text"
          name="table"
          value={info.table}
          onChange={handleInfo}
          required
        />
      </div>
      <section className="sectionOrder">
        {order.map((item) => {
          return (
            <TemplateOrder
              key={item.id}
              product={item}
              onClickRemove={() => handleRemoveItem(item)}
            />
          );
        })}
        <p className="total"> VALOR TOTAL: R${totalValue().toFixed(2)}</p>
      </section>
      <div className="logout" onClick={handleLogout}>
        <button children="Confirmar Pedido" id="confirm" onClick={finalOrder}></button>
        <FaSignInAlt size="26px" margin-rigth="0px" />
      </div>
      <button className="btnModal"onClick={() => setHistoric(true)}><FaClipboardList size="26px" /></button>
      {historic ?(
      <Modal onClickClose={() => setHistoric(false)}>
        <h2>Histórico</h2>
      </Modal >): null
      }
    </div>
  );
}
export default Hall;
