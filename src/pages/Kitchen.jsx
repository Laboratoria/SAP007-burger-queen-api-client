import { GetOrders, OrderStatusUpdate } from '../services/products';
import { useState, useEffect } from 'react';
import Header from '../components/header/Header';
import { BackgroundCard } from '../components/modal-menu/body/MenuCardModalStyle';
import { DefaultTitle, ParagraphOrderKitchen } from '../components/style-html-elements/elements-style';
import { BtnSendOrderToKitchenAndPrepareIt, BtnKitchenFinishOrder} from '../components/button/ButtonStyle';
import StyleBackgroundImg from "../components/img-background/style-bg-img";

const Kitchen = () => {
    const [kitchen, setKitchen] = useState([]);    

    useEffect(() => {
        GetOrders()
            .then((json) => {
                json.sort( (a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() );

                const updateItems = json.map((item) => {
                    if(item.status === "pending") {
                        item.status = "Pendente"
                    } 

                    return item;
                })

                const filterArray = updateItems.filter(item => item.status !== 'Finalizado' && item.status !== 'Entregue' );
                setKitchen(filterArray);
                
            })
            
    }, [])