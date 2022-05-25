import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";
import Card from "../components/Card";
import filterProducts from "../services/Products";
import { codeError } from "../services/error";
import PurchaseOrder from "../components/PurchaseOrder";
import { useNavigate } from "react-router-dom";
import { getProduct, createOrder} from "../services/api";
import { useState, useEffect } from "react";

function Hall() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({client:"", table:""});
  const [products, setProducts] = useState([])
  const [item, setItem] = useState([]);
  const [error, setError] = useState("");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function PushedProducts(option) {
    getProduct()
      .then((response) => response.json())
      .then((data) => setProducts(filterProducts(data, option)));
  }
 
  useEffect(() => {
    PushedProducts("breakfast");
  }, []);

  const handleInfo = (e) =>{
    return setInfo(() => {
      const auxInfo = {...info};
      auxInfo[e.target.name] = e.target.value;
      console.log(auxInfo)
      return auxInfo;
    })
  }

  const handleProduct = (product) =>{
    const productIndex = item.findIndex((item)=> item.id === product.id);
    if(productIndex === -1){
      setItem([...item,{...product, qtd:1}]);
    }else{
      item[productIndex].qtd += 1;
      console.log(productIndex)
      setItem([...item]);
    }
  }

  function order(){
    createOrder(info, item)
    .then((response) => response.json())
    .then ((data)=> {
      if(data.code ===400){
        setError(codeError(error))
      }else{
        setItem([]);
        setInfo({client:"", table:""})
      }
    })
  }
  order()

  return (
    <div>
      <Header children="PEDIDOS" />
      <Button children="CAFÉ" onClick={()=>PushedProducts("breakfast")} />
      <Button children="+ MENU" onClick={()=>PushedProducts("all-day")} />
      <ul>
        {products.map((item) => {
          return (
            <Card  key={item.id} 
              product={item}
              onClick={handleProduct}
            />
            );
          })}
      </ul>
      <PurchaseOrder />
      <Input
        placeholder="CLIENTE"
        type="text"
        name="client"
        onChange={handleInfo}
      />
      <Input
        placeholder="MESA"
        type="text"
        name="table"
        onChange={handleInfo}
      />
      <PurchaseOrder />
      <Button children="Sair" onClick={handleLogout} />
    </div>
  );
}

export default Hall;
