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
   const newOrder = order;
    const productList = newOrder.find((item) => {
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
      newOrder.push(newList);
    };
    setOrder([...newOrder]);
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
      .then(() => {
        navigate("/kitchen");
      })
      .catch((error) => {
        setError(codeError(error));
      });
  
    console.log(createOrder(openTable));
    }
    function handleRemoveItem(product) {
      let updateOrder = [...order];
       const productInList = updateOrder.find((item) => {
         return product.id ===item.id;
       });
       if (productInList.qtd > 1) {
        productInList.qtd -= 1;
       } else {
        updateOrder = updateOrder.filter((element) => 
        element.id !== product.id)
       setOrder(updateOrder);
     };
     console.log(productInList);
     console.log(updateOrder);
     return handleRemoveItem();
    };
    // function totalValue (){
    //   const wholeAmount = []
    //   for (let i=0; i< order.length; i++){
    //     const totalSum = order[i].qtd * order[i].price
    //     wholeAmount.push(totalSum);
    //   }
    // }
  
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
            <TemplateOrder
            key={item.id}
            product={item}
            onClickAdd={() => handleProduct(item)}
            onClickRemove={()=>handleRemoveItem(item)}
           />
          ) 
        })}
        <p>Cliente:{info.client} Mesa: {info.table}</p>
        {/* <p> Valor total : R${totalValue()}</p> */}
      </section>
      <Button children="Sair" onClick={handleLogout} />
      <Button children="finalizar Pedido" onClick={listOrder} />
    </div>
  );
}
export default Hall;
