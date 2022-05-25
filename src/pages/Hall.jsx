import { useState, useEffect } from "react";
import { RenderAllProducts, PostOrders } from "../services/products.js";
import { Title } from "../components/modal-menu/header/HeaderCardStyle";
import HeaderCard from "../components/modal-menu/header/HeaderCard";
import MenuCardModal from "../components/modal-menu/body/MenuCardModal";
import {
  BackgroundCard,
  DivProduct,
} from "../components/modal-menu/body/MenuCardModalStyle.js";
import { MdDelete } from "react-icons/md";
import { DefaultParagraph } from "../components/style-html-elements/elements-style.js";
import Header from "../components/header/Header.js";
import Modal from "../components/modal/Modal.js";
import {
  BtnSendOrderToKitchenAndPrepareIt,
  ButtonsHall,
  CancelOrder,
} from "../components/button/ButtonStyle.js";
import { Link } from "react-router-dom";
import { GetOrders } from "../services/products";
import { ClientData } from "../components/input/InputStyle.js";
import breakfastImg from "../images/breakfast.png";
import burguerSimplesImg from "../images/bg-simples.png";
import burguerDuploImg from "../images/bg-duplo.png";
import drinkImg from "../images/drink.png";
import friesImg from "../images/fries.png";
import StyleBackgroundImg from "../components/img-background/style-bg-img";

const Hall = () => {
  const [showBreakfast, setShowBreakfast] = useState(false);
  const [showHamburguer, setShowHamburguer] = useState(false);
  const [showHamburguerDuplo, setShowHamburguerDuplo] = useState(false);
  const [showDrink, setShowDrink] = useState(false);
  const [showSide, setShowSide] = useState(false);
  const [nameClient, setNameClient] = useState("");
  const [table, setTable] = useState("");
  const [order, setOrder] = useState([]);
  const [allValue, setAllValue] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [menu, setMenu] = useState([]);
  const [readyOrder, setReadyOrder] = useState([]);

  useEffect(() => {
    RenderAllProducts()
      .then((json) => setMenu(json))
      .catch((error) => {
        alert("Erro na requisição. [" + error.message + "]");
      });

   GetOrders().then((json) => {
      const FinishedOrders = json.filter(
        (item) => item.status === "Finalizado"
      );
      setReadyOrder(FinishedOrders ? FinishedOrders.length : 0);
    });
  }, []);

  const handleClick = (typeProduct) => {
    if (typeProduct === "breakfast") {
      setShowBreakfast(!showBreakfast);
    }
    if (typeProduct === "hamburguer") {
      setShowHamburguer(!showHamburguer);
    }
    if (typeProduct === "drink") {
      setShowDrink(!showDrink);
    }
    if (typeProduct === "side") {
      setShowSide(!showSide);
    }
    if (typeProduct === "hamburguerDuplo") {
      setShowHamburguerDuplo(!showHamburguerDuplo);
    }
  };

  const handleChange = (e) => {
    setNameClient(e.target.value);
  };

  const handleChangeTable = (e) => {
    setTable(e.target.value);
  };

  const addOrderSummary = (
    idProduct,
    nameProduct,
    price,
    quantityProduct,
    flavor,
    complement
  ) => {
    let updatedOrder = [...order.filter((item) => item.id !== idProduct)];

    if (quantityProduct > 0) {
      updatedOrder.push({
        id: idProduct,
        quantity: quantityProduct,
        name: nameProduct,
        price: price,
        totalProductPrice: price * quantityProduct,
        flavor: flavor,
        complement: complement,
      });
    }

    const updatedMenu = menu.map((item) => {
      if (item.id === idProduct) {
        return { ...item, quantity: quantityProduct };
      }
      return item;
    });

    setMenu(updatedMenu);
    setOrder(updatedOrder);
    totalValue(updatedOrder);
  };

  const sendSummary = () => {
    if (nameClient !== "" && table !== "" && order.length > 0) {
      const allProducts = order.map((item) => {
        const productsArr = {
          id: item.id,
          qtd: item.quantity,
        };
        return productsArr;
      });

      PostOrders(nameClient, table, allProducts).then(() => {
        setShowModal(true);
        setShowResume(false);
        setNameClient("");
        setTable("");
        setMenu(
          menu.map((item) => {
            item.quantity = 0;
            return item;
          })
        );
        setOrder([]);
        setShowBreakfast(false);
        setShowHamburguer(false);
        setShowHamburguerDuplo(false);
        setShowSide(false);
        setShowDrink(false);
        window.scrollTo(0, 0);
      });
    }
  };