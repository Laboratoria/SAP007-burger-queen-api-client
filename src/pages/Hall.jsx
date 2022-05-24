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
import {
  DefaultTitle,
  DefaultParagraph,
} from "../components/style-html-elements/elements-style.js";
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