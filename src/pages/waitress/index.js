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
  const [client, setClient] = useState({ name: "" });
  const [table, setTable] = useState({ table: "" });
  const [total, setTotal] = useState()

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

  useEffect(() => {
    getProducts("breakfast");
  }, []);

  function OrderProduct(product) {
    console.log("entrou");
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
        client,
        table
      };
      console.log(newList);
      order.push(newList);
    }
    setOrder([...order]);
    totalPrice()
  }
  // console.log(order);

  const links = [
    {
      name: "Café da manhã",
      onClick: () => getProducts("breakfast"),
    },
    {
      name: "Dia-Todo",
      onClick: () => getProducts("all-day")
    }
  ];

  function totalPrice(){
    let price = 0
    order.forEach((product)=> {
      price += (parseFloat(product.price) * parseFloat(product.qtd))
      console.log(product.price, product.qtd)
    })
    console.log(price)
   
    return  setTotal( price)
  }
 

  return (
    <>
      <HeaderPedidos links={links} />

      <main className="orders">
        <section className="products">
          <h1>produtos </h1>
          <ul>
            {products.map((item) => {
              return (
                <Card
                  key={item.id}
                  product={item}
                  onClick={() => OrderProduct(item) }
                />
              );
            })}
          </ul>
        </section>
        <section className="client-cart">
          <div className="client-infos">

            <Client setClient={setClient} setTable={setTable} />
          </div>
          <div className="cart">

            <Cart orderList={order} total={total}/>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Waitress;
