import HeaderPedidos from "../../components/headerPedidos";
import Client from "../../components/client";
import Footer from "../../components/Footer/index";
import Cart from "../../components/cart/index";
import { getAllProducts } from "../../services/products";
import "./styles.modules.css";
import { useState } from "react";

function Waitress() {
  const [products, setProducts] = useState([]);

  const token = localStorage.getItem("token");

  function getProducts(option) {
    getAllProducts(token).then((data) => {
      console.log("aqui")
        setProducts(
          data.map((item) => {
            console.log("dentro")
            return item.type === option;
            
          })
        );

      });
      
  }
  console.log(products)
  getProducts("breakfast")
  return (
    <>
      <HeaderPedidos>
      <li>
        <a href="" onClick={() => getProducts("breakfast")}>Café da manhã</a>
      </li>
      <li>
        <a href="" onClick={() => getProducts("all-day")}> Dia Todo</a>
      </li>
      <li>
        <a href="" onClick={() => getProducts("all-day")}>Pedidos</a>
      </li>
      </HeaderPedidos>
      <main className="orders">
        <section className="products">
          <h1>produtos {products}</h1>
          { }
        </section>
        <section className="client-cart">
          <div className="client-infos">
            <Client />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Waitress;
