import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Card from "../components/Card";
import filterProducts from "../services/Products";
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../services/api";
import { useState, useEffect } from "react";

function Hall() {
  const navigate = useNavigate();
  const [client, setClient] = useState();
  const [table, setTable] = useState();
  const [products, setProducts] = useState([]);
  console.log(products);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

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
      <PurchaseOrder />
      <Input
        placeholder="CLIENTE"
        value={client}
        onChange={(e) => setClient(e.target.value)}
      />
      <Input
        placeholder="MESA"
        value={table}
        onChange={(e) => setTable(e.target.value)}
      />
    </div>
  );
}

export default Hall;
