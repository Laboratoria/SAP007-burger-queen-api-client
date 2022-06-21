import React from "react";
import { useState, useEffect } from "react";
import { timeAndDate, getPrepTime } from "../components/timeAndDate.js";
import { getRole } from "../services/token";
import { getAllOrders } from "../services/auth";
import Logo from '../images/Logo.png';
import Header from "../components/Header";
import NavStatus from "../components/NavStatus";
import Input from "../components/Input";
import { Order, OrderProduct } from "../components/Order";
import Modal from "../components/Modal";
import styles from './Summary.module.css';

function Summary() {

    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        async function summary() {
            try {
                let searchId = [...orders];
                const response = await getAllOrders();
                if (search === "") {
                    searchId = response.sort((a, b) => {
                        return b.id - a.id;
                    })
                } else {
                    searchId = response.filter((order) => {
                        // eslint-disable-next-line eqeqeq
                        return search == order.id;
                    })
                }
                setOrders(searchId)
            } catch (error) {
                return error
            }
        }
        summary()
    }, [orders, search])

    const roleKitchen = getRole() === "kitchen";

    return (
        <div>
            <Header children='Histórico' img={Logo} alt={'Logo da Burger Heroes'} />
            {roleKitchen ?
                <NavStatus firstLink='/HallKitchen' nameFirstLink='A Preparar' secondLink='/Summary' nameSecondLink='Histórico' />
                :
                <NavStatus firstLink='/HallAttendance' nameFirstLink='Novo Pedido' secondLink='/HallAttendanceStatus' nameSecondLink='Pedidos Prontos'
                    thirdLink='/Summary' nameThirdLink='Histórico'
                />
            }
            <section>
                <Input customClass="input_search" type='text' placeholder="Pesquisar pedido por ID" handleOnChange={(e) => setSearch(e.target.value)} />
            </section>
            <section className={styles.main_summary}>
                {orders.map((item, index) => {
                    const updateToServed = item.status === "served"
                    const updateToProcessing = item.status === "processing" || item.status === "served"
                    const infosProduct = item.Products.map((product) => {
                        return (
                            <div key={product.id}>
                                <OrderProduct
                                    name={product.name}
                                    flavor={product.flavor}
                                    complement={product.complement !== null ? product.complement : "nenhum"}
                                    qtd={product.qtd}
                                />
                            </div>
                        )
                    });

                    return (
                        <div key={index}>
                            <Order
                                status={item.status}
                                id={item.id}
                                nameClient={item.client_name}
                                table={item.table}
                                createDate={timeAndDate(item.createdAt)}
                                finished={updateToProcessing && timeAndDate(item.processedAt)}
                                preparationTime={updateToProcessing && getPrepTime(item.processedAt, item.createdAt)}
                                delivered={updateToServed && getPrepTime(item.updatedAt, item.processedAt)}
                                orderProducts={infosProduct}
                                textButton={item.status}
                            />
                        </div>
                    )
                })}
            </section>
            {isModalVisible ?
                <Modal clickFunction={() => setIsModalVisible(false)}>ID do pedido não encontrado</Modal> : null
            }
        </div>
    )
}

export default Summary;