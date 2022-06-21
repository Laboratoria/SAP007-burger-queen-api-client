import React from "react";
import { useState, useEffect } from "react";
import { getAllOrders, updateOrder } from "../services/auth";
import { timeAndDate, getPrepTime } from "../components/timeAndDate";
import Logo from '../images/Logo.png';
import Header from "../components/Header";
import NavStatus from "../components/NavStatus";
import { Order, OrderProduct } from "../components/Order";
import Modal from "../components/Modal";
import styles from './HallAttendanceStatus.module.css';


function Status() {

    const [orders, setOrders] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        async function filterOrders() {
            try {
                const response = await getAllOrders();
                const filteredOrders = response.filter((order) => {
                    return order.status === "deliver";
                })
                setOrders(filteredOrders);
                const modal = filteredOrders.length === 0
                setIsModalVisible(modal)
            } catch (error) {
                return error
            }
        }
        filterOrders();
    })

    return (
        <div>
            <Header children='Atendimento' img={Logo} alt={'Logo da Burger Heroes'} />
            <NavStatus firstLink='/HallAttendance' nameFirstLink='Novo Pedido' secondLink='/HallAttendanceStatus' nameSecondLink='Pedidos Prontos'
                thirdLink='/Summary' nameThirdLink='Histórico'
            />
            <section className={styles.status_main}>
                {orders.map((item, index) => {
                    const updateToProcessing = item.status === "deliver"
                    const infosProduct = item.Products.map((product) => {
                        return (
                            <OrderProduct
                                key={product.id}
                                name={product.name}
                                flavor={product.flavor}
                                complement={product.complement !== null ? product.complement : "nenhum"}
                                qtd={product.qtd}
                            />
                        )
                    });

                    return (
                        <Order
                            key={index}
                            status={item.status}
                            id={item.id}
                            nameClient={item.client_name}
                            table={item.table}
                            createDate={timeAndDate(item.createdAt)}
                            finished={updateToProcessing ? timeAndDate(item.processedAt) : ""}
                            preparationTime={updateToProcessing ? getPrepTime(item.processedAt, item.createdAt) : ""}
                            orderProducts={infosProduct}
                            textButton={item.status}
                            readyForDelivery={() => updateOrder(item.id, "served")}
                        />
                    )
                })}
            </section>
            {isModalVisible &&
                <Modal clickFunction={() => setIsModalVisible(false)}>Não há pedidos prontos</Modal>
            }
        </div>
    )
}

export default Status;