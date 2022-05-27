import HeaderPedidos from "../../components/headerPedidos";
import Client from "../../components/client";
import Footer from "../../components/Footer/index";
import Cart from "../../components/cart/index";
import Card from "../../components/card";
import { getAllProducts } from "../../services/products";
import "./styles.modules.css";
import { useState, useEffect } from "react";

function Waitress() {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState({name: ""});
  const [table, setTable] = useState({  table: ""});
  // let [options, setOptions] = useState();
  console.log(client)
  console.log(table)
  // console.log(options)

  const token = localStorage.getItem("token");

  function getProducts(option) {
    getAllProducts(token).then((data) => {
      
        let filterProduts = data.filter((item) => {
          
          return item.type === option

        }
      
      );
      setProducts(filterProduts)
    });

  }

  console.log(products)

  useEffect(() => {
    getProducts("breakfast");
  });

  function handleProduct(product) {
    const productList = order.find((item) => {
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
        qtd: 1,
      };
      order.push(newList);
    }
    setOrder([...order]);
  }
  // console.log(order);


  return (
    <>
      <HeaderPedidos event={getProducts("breakfast")} /*setOptions={setOptions="breakfest"}*/ >

      </HeaderPedidos>
      <main className="orders">
        <section className="products">
          <h1>produtos </h1>
          <ul>
            {products.map((item) => {
              return (
                <Card
                  key={item.id}
                  product={item}
                  onClick={() => handleProduct(item)}
                />
              );
            })}
          </ul>
        </section>
        <section className="client-cart">
          <div className="client-infos">

            <Client setClient={setClient} setTable={setTable}/>
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
