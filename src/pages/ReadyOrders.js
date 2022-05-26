import Header from "../components/header/Header";
import { DefaultTitle, ParagraphReadyOrders, DefaultParagraph, OrderSummaryH2 } from "../components/style-html-elements/elements-style";
import { GetOrders, OrderStatusUpdate} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/modal-menu/body/MenuCardModalStyle";
import { BtnSendOrderToKitchenAndPrepareIt } from "../components/button/ButtonStyle";
import { Link } from "react-router-dom";
import StyleBackgroundImg from "../components/img-background/style-bg-img";


const ReadyOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        GetOrders()
            .then((json) => {
                
                const FinishedOrders = json.filter((item) => item.status === 'Finalizado');
                setOrders(FinishedOrders)
               
            })
    }, [])


    const changeStatus = (item, index) => {
             
        OrderStatusUpdate(item.id, "Entregue").then(() => {
            const updatedList = [...orders];
            updatedList.splice(index, 1);
            setOrders(updatedList);
         })

    }

    