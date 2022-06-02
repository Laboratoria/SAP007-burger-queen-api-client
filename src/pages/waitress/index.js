import HeaderPedidos from "../../components/headerPedidos";
import Client from "../../components/client";
import Footer from "../../components/Footer/index";
import Cart from "../../components/cart/index";
import Card from "../../components/card";
import { getAllProducts } from "../../services/products";
import "./styles.modules.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbarAllDay";
import { createOrder } from "../../services/order";

function Waitress() {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState("breakfast");
  const [allDayTab, setAllDayTab] = useState("hamburguer");
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState();
  const [table, setTable] = useState();
  const [total, setTotal] = useState();
  const [hasProducts, setHasProducts] = useState(false);
  const [hasAllDay, setHasAllDay] = useState(false);
  
 console.log(typeof(Number.parseInt(table)))
  const token = localStorage.getItem("token");

  // function menuIndicator () {
  //   option.classList.toggle('active');
  // }

  console.log(typeof table);

  useEffect(() => {
    getAllProducts(token).then((data) => {
      const breakfast = data.filter((item) => {
        return item.type === "breakfast";
      });
      const hamburguer = data.filter((item) => {
        return item.sub_type === "hamburguer";
      });
      const drinks = data.filter((item) => {
        return item.sub_type === "drinks";
      });
      const side = data.filter((item) => {
        return item.sub_type === "side";
      });
      const filterProducts = {
        breakfast,
        "all-day": {
          hamburguer,
          drinks,
          side,
        }
      }
      setProducts(filterProducts);
      setHasProducts(true);
    });
  }, []);

  function OrderProduct(product) {
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
        qtd: 1, /*setQuantity(+1),*/
        client: client,
        table: parseInt(table),
      };
      order.push(newList);
    }
    setOrder([...order]);
    totalPrice();
  }

  function orderCreate(){
    createOrder(token, order).then((data) => {
      console.log(order);
  })}
  
  const links = [
    {
      name: "Café da manhã",
      onClick: () => changeStateBreakfast(),
    },
    {
      name: "Dia Todo",
      onClick: () => changeStateAllDay(),
    },
  ];

  function changeStateBreakfast () {
    setTab("breakfast");
    setHasAllDay(false);
    // setActivationBreakfast(true);
  }

  function changeStateAllDay () {
    setTab("all-day");
    setHasAllDay(true);
    // setActivationBreakfast(false);
  }
  
  const linksAllDay = [
    {
      name: "Hambúgueres",
      onClick: () => setAllDayTab("hamburguer"),
    },
    {
      name: "Bebidas",
      onClick: () => setAllDayTab("drinks"),
    },
    {
      name: "Acompanhamentos",
      onClick: () => setAllDayTab("side"),
    },
  ];

  function totalPrice() {
    let price = 0;
    order.forEach((product) => {
      price += parseFloat(product.price) * parseFloat(product.qtd);
      console.log(product.price, product.qtd);
    });
    console.log(price);

    return setTotal(price);
  }

  const activeProducts = tab === "all-day" ? products[tab][allDayTab] : products[tab];
 
  return (
    <>
      <HeaderPedidos links={links}  className="option" /*className="{activationBreakfast === true ? "selected" : "option"}"*//>

      <main className="orders">
        <section className="products">
          <ul>
            {hasAllDay === true ? <Navbar links={linksAllDay} /> : null}
            {hasProducts === true && activeProducts.map((item) => {
              return (
                <Card
                  key={item.id}
                  product={item}
                  onClick={() => OrderProduct(item)}
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
         
           
            <Cart onClick={() => orderCreate()} orderList={order} total={total} setOrder={setOrder} totalPrice={totalPrice}/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Waitress;
