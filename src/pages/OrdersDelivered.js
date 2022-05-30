import HeaderLogo from "../components/header/HeaderLogo";
import { DefaultTitle, ParagraphUniversal, OrderSummaryH2 } from "../components/style-html-elements/elements-style";
import { GetOrders} from '../services/products';
import { useState, useEffect } from 'react';
import { BackgroundCard, DivProductKitchen } from "../components/modal-menu/body/MenuCardModalStyle";
import { Link } from "react-router-dom";
import StyleBackgroundImg from "../components/img-background/style-bg-img";

const OrdersDelivered = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        GetOrders()
            .then((json) => {
               
                const orderDelivered = json.filter((item) => item.status === 'Entregue');
                setOrders(orderDelivered)

            })

    }, [])

    return (
        <>
            <StyleBackgroundImg />
            <HeaderLogo showLogOut={true} />                    
           
            <div className="container">
                <DefaultTitle>Pedidos Entregues</DefaultTitle>
                <Link to="/hall"><div className="p-voltar"> Voltar</div></Link>
            </div>
                
            {orders.map((item) => (
                <div className="container" key={item.id}>
                    <BackgroundCard >
                        <DivProductKitchen>
                            <OrderSummaryH2>Status: {item.status}</OrderSummaryH2>
                            <ParagraphUniversal>Nome: {item.client_name}</ParagraphUniversal>
                            <ParagraphUniversal>Mesa: {item.table}</ParagraphUniversal>
                            <div className="container">
                            {item.Products.map((product) =>
                                <span key={product.id}>
                                <p>{product.qtd} {product.name} {product.flavor} {product.complement}</p>                                   
                                </span>                                   
                               
                            )}
                            </div>
                        </DivProductKitchen>
                    </BackgroundCard>
                </div>                
            ))}
        </>
    )
}

export default OrdersDelivered;