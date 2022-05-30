import Button from "../components/Button";
import Header from "../components/Header";
import Card from "../components/Card";
import Input from "../components/Input";
import { codeError } from "../services/error";
import  TemplateOrder from "../components/TemplateOrder";
import { createOrder, getProduct } from "../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Hall() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ client: "", table: "" });
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [error, setError] = useState("");
  console.log(error);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  };

  function PushedProducts(option) {
    getProduct()
      .then((response) => response.json())
      .then((data) => {
        setProducts(
          data.filter((item) => {
            return item.type === option;
          }),
        );
      });
  };

  useEffect(() => {
    PushedProducts("breakfast");
  }, []);

  const handleInfo = (e) => {
    return setInfo(() => {
      const auxInfo = { ...info };
      auxInfo[e.target.name] = e.target.value;
      console.log(auxInfo);
      return auxInfo;
    });
  };

  function handleProduct(product) {
    const productList = order.find((item) => {
      return item.id === product.id;
    });
    if (productList) {
      productList.qtd += 1;
    } else {
      console.log(order);
      const newList = {
        id: product.id,
        name: product.name,
        price: product.price,
        flavor: product.flavor,
        qtd: 1,
      };
      order.push(newList);
    };
    setOrder([...order]);
  };
  console.log(order);

  function listOrder(){
    const openTable ={
      client:info.client,
      table:info.table,
      products:order.map((item)=> {
      const infosOrder = {
        id: item.id,
        name:item.name,
        price: item.price,
        flavor: item.flavor,
        qtd: 1,
      }
       console.log(infosOrder);
       return infosOrder;
      }),
   
    };
    createOrder(openTable)
    .then((response)=> {
      response.json()
      navigate("/kitchen");
    })
    .catch((error)=>{
    setError(codeError(error));
  });
  console.log(openTable);
  };
  
  return (
    <div>
      <Header children="PEDIDOS" />
      <Button children="CAFÉ" onClick={() => PushedProducts("breakfast")} />
      <Button children="+ MENU" onClick={() => PushedProducts("all-day")} />
      <ul>
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              product={item}
              onClick={() => handleProduct(item)}
            />
          )
        })}
      </ul>
      <div>
        <Input
          placeholder="CLIENTE"
          type="text"
          name="client"
          value={info.client}
          onChange={handleInfo}
        />
        <Input
          placeholder="MESA"
          type="text"
          name="table"
          value={info.table}
          onChange={handleInfo}
        />
      </div>
      <section>
      {order.map((item) => {
        return (
          < TemplateOrder
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            flavor={item.flavor}
            qtd={1}
            onChange={() => handleProduct(item)}
          />       
        )
      })}
      <p>Cliente:{info.client} Mesa: {info.table}</p>   
      </section>
      <Button children="Sair" onClick={handleLogout} />
      <Button children="finalizar Pedido" onClick={listOrder} />
    </div>
  );
}

export default Hall;

// function listOrder(order) {
//   //   createOrder(info, order)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       if (data.code === 400) {
//   //         setError(codeError(error));
//   //       } else {
//   //         setOrder([]);
//   //         setInfo({ client: "", table: "" });
//   //       }
//   //     });
//   // }
//   // listOrder(order); //função será chamada futuramente e apagaremos essa linha
