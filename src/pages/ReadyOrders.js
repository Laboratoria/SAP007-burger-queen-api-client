import Header from "../components/header/Header";
import { DefaultTitle, ParagraphReadyOrders, DefaultParagraph, OrderSummaryH2 } from "../components/style-html-elements/elements-style";
import { GetOrders, OrderStatusUpdate} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/modal-menu/body/MenuCardModalStyle";
import { BtnSendOrderToKitchenAndPrepareIt } from "../components/button/ButtonStyle";
import { Link } from "react-router-dom";
import StyleBackgroundImg from "../components/img-background/style-bg-img";




