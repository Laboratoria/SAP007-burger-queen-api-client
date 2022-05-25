import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Card from "../components/Card";
<<<<<<< HEAD
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import { useState } from "react";

=======
import filterProducts from "../services/Products";
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import { useState, useEffect } from "react";
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb

function Hall() {
  const navigate = useNavigate();
  const [client, setClient] = useState();
  const [table, setTable] = useState();
<<<<<<< HEAD
  const [products, setProducts] = useState([])
  console.log(setProducts)
=======
  const [products, setProducts] = useState([]);
  console.log(products);

>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

<<<<<<< HEAD

function PushedProducts (){
  getProduct()
  .then ((response)=> response.json())
  // .then ((data)=> setProducts(data.name)) 
}
PushedProducts()

  return (
    <div>
      <Header text="PEDIDOS" />
      <Button children="sair" onClick={handleLogout} />
      <Input placeholder="MENU PRINCIPAL" />
      <Input placeholder="CAFÉ DA MANHÃ" />
      <Card item={products.name}/>
=======
  function PushedProducts(option) {
    getProduct()
      .then((response) => response.json())
      .then((data) => setProducts(filterProducts(data, option)));
  }
//   const handleProducts = (option) => {
//     PushedProducts(option);
//   };

  useEffect(() => {
    PushedProducts("breakfast");
  }, []);

  return (
    <div>
      <Header children="pedidos" />
      <Button children="sair" onClick={handleLogout} />
      <Button children="café" onClick={()=>PushedProducts("breakfast")} />
      <Button children="almoço" onClick={()=>PushedProducts("all-day")} />
      <ul>
        {products.map((item) => {
          return (
              <Card  key={item.id} 
            //   price={item.price} 
            //   name={item.name} 
            //   flavor={item.flavor}
            product={item}
              />
          );
        })}
      </ul>
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
      <PurchaseOrder />
      <Input
        placeholder="CLIENTE"
        value={client}
        onChange={(e) => setClient(e.target.value)}
<<<<<<< HEAD
        />
        {console.log(setClient)}
=======
      />
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
      <Input
        placeholder="MESA"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />
<<<<<<< HEAD
      <PurchaseOrder />
      
=======
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
    </div>
  );
}

export default Hall;
