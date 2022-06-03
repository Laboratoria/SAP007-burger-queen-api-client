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
import Error from "../../components/errors";

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
  const [error, setError] = useState();
  
  // function menuIndicator () {
  //   option.classList.toggle('active');
  // }

  useEffect(() => {
    getAllProducts().then((data) => {
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
        },
      };
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
        qtd: 1 ,
      };
      order.push(newList);
    }
    setOrder([...order]);
    totalPrice();
  }
  
  function orderCreate() {
    if(client && table && order){
    createOrder(client, table, order).then((data) => {
      console.log(data);
      if(data.code === 400){
        setError(data.message);
        hideMessage();
      }
      handleReset()
    });}
    else {
      setError("Preencha os campos corretamente");
      hideMessage();
    }
  }

  function handleReset() { 
    setClient("")
    setTable("")
    setOrder([]);
    setTotal();
  };


  function hideMessage() {
    setTimeout(() => {
      setError("");
    }, 6000);
  }

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

  function changeStateBreakfast() {
    setTab("breakfast");
    setHasAllDay(false);
    // setActivationBreakfast(true);
  }

  function changeStateAllDay() {
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
    });

    return setTotal(price);
  }

  const activeProducts =
    tab === "all-day" ? products[tab][allDayTab] : products[tab];

  return (
    <>
      <HeaderPedidos
        links={links}
        className="option" /*className="{activationBreakfast === true ? "selected" : "option"}"*/
      />

      <main className="orders">
        <section className="products">
          <ul>
            {hasAllDay === true ? <Navbar links={linksAllDay} /> : null}
            {hasProducts === true &&
              activeProducts.map((item) => {
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
            <Client setClient={setClient} setTable={setTable} client={client} table={table}/>
          </div>
          <div className="cart">
            <Cart
              onClick={() => orderCreate()}
              orderList={order}
              total={total}
              setOrder={setOrder}
              totalPrice={totalPrice}
            />
            <Error text={error} className="error-waitress"/>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Waitress;
