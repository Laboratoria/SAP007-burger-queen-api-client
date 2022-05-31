import HeaderPedidos from "../../components/headerPedidos";
import Client from "../../components/client";
import Footer from "../../components/Footer/index";
import Cart from "../../components/cart/index";
import Card from "../../components/card";
import { getAllProducts } from "../../services/products";
import "./styles.modules.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbarAllDay";

function Waitress() {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState("breakfast");
  const [allDayTab, setAllDayTab] = useState("hamburguer");
  const [order, setOrder] = useState([]);
  const [client, setClient] = useState({ name: "" });
  const [table, setTable] = useState({ table: "" });
  const [total, setTotal] = useState();
  const [hasProducts, setHasProducts] = useState(false);
  const [hasAllDay, setHasAllDay] = useState(false);

  const token = localStorage.getItem("token");

  // function getAllDay(option) {
  //   getAllProducts(token).then((data) => {
  //     let filterProduts = data.filter((item) => {
  //       return item.sub_type === option;
  //     });
  //     setProducts(filterProduts);
  //   });
  // }

  // function menuIndicator () {
  //   option.classList.toggle('active');
  // }

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
        qtd: 1,
        client,
        table,
      };
      console.log(newList);
      order.push(newList);
    }
    setOrder([...order]);
    totalPrice();
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

  function changeStateAllDay () {
    setTab("all-day");
    setHasAllDay(true);
  }

  function changeStateBreakfast () {
    setTab("breakfast");
    setHasAllDay(false);
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
  // products.length > 0;

  return (
    <>
      <HeaderPedidos links={links} />

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
            <Cart orderList={order} total={total} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Waitress;
