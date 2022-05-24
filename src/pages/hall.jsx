import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Card from "../components/Card";
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import { useState } from "react";


function Hall() {
  const navigate = useNavigate();
  const [client, setClient] = useState();
  const [table, setTable] = useState();
  const [products, setProducts] = useState([])
  console.log(setProducts)
  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }


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
      <PurchaseOrder />
      <Input
        placeholder="CLIENTE"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        />
        {console.log(setClient)}
      <Input
        placeholder="MESA"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />
      <PurchaseOrder />
      
    </div>
  );
}

export default Hall;
