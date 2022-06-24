import React from "react";
import { useEffect, useState } from "react";
import { getProducts, createOrder } from "../services/auth";
import Logo from '../images/Logo.png';
import Header from "../components/Header";
import NavStatus from "../components/NavStatus";
import Input from "../components/Input";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import Command from "../components/Command";
import Modal from "../components/Modal";
import styles from "./HallAttendance.module.css";

function HallAttendance() {
    const [productList, setProductList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const [selectFlavors, setSelectFlavors] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false); //constantes puxando os hooks
    const [errorMessage, setErrorMessage] = useState("");
    const [clientInf, setClientInf] = useState({
        name: "",
        table: "",
    })

    useEffect(() => {
        async function breakfast() {
            try {
                const response = await getProducts();
                setProductList(response.filter((item) => {
                    return item.type === "breakfast";
                }));
            } catch (error) {
                return error;
            }
        }
        breakfast();
    }, [])

    async function getMenu(category) {
        try {
            const response = await getProducts();
            setSelectFlavors(false)
            setProductList(response.filter((item) => {
                return item.type === category || item.sub_type === category
            }));
        } catch (error) {
            return error
        }
    }

    function getFlavor() {
        setSelectFlavors(true)
    }

    async function menuFlavor(flavor) {
        try {
            const response = await getProducts();
            setProductList(response.filter((item) => {
                return item.flavor === flavor
            }));
        } catch (error) {
            return error
        }
    }
    const getChange = (e) => {
        setClientInf({
            ...clientInf,
            [e.target.id]: e.target.value
        })
    }

    function chooseOrder(item) {
        const selectQuantities = orderList.find((element) => {
            return element.id === item.id
        });

        if (selectQuantities) {
            selectQuantities.qtd += 1;
        } else {
            const objectItem = {
                id: item.id,
                name: item.name,
                price: item.price,
                flavor: item.flavor,
                complement: item.complement,
                qtd: 1,
            };
            orderList.push(objectItem)
        };
        setOrderList([...orderList]);
    }

    function removeItem(item) {
        let newOrders = [...orderList];
        const selectQuantities = newOrders.find((element) => {
            return element.id === item.id
        })

        if (selectQuantities.qtd > 1) {
            selectQuantities.qtd -= 1;
        } else {
            newOrders = newOrders.filter((orderItem) => orderItem.id !== item.id)
        }
        setOrderList(newOrders)
    }

    function sum() {
        const amount = []
        for (let i = 0; i < orderList.length; ++i) {
            const amountProduct = orderList[i].qtd * orderList[i].price
            amount.push(amountProduct)
        }

        const initialValue = 0
        const totalSum = amount.reduce((previousValue, currentValue) =>
            previousValue + currentValue, initialValue
        )
        return new Intl.NumberFormat("br-BR", { style: "currency", currency: "BRL" }).format(totalSum);
    }

    async function getSubmit() {
        const orderData = {
            client: clientInf.name, //inserindo o nome do cliente e mesa nos dados do pedido
            table: clientInf.table,
            products: orderList.map((item) => {
                const infosProduct = {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    flavor: item.flavor,
                    complement: item.complement,
                    qtd: item.qtd,
                };
                return infosProduct
            }),
        };

        if (clientInf.name === "" || clientInf.table === "") {
            console.log(clientInf.table, clientInf.name)
            setIsModalVisible(true)
            setErrorMessage("Campos incompletos.")
        } else if (orderList.length === 0) {
            setIsModalVisible(true)
            setErrorMessage("Não há produtos no pedido.")
        } else {
            try {
                const response = await createOrder(orderData)
                if (!response.code) {
                    setIsModalVisible(true)
                    setErrorMessage("Pedido realizado com sucesso!")
                    setOrderList([]);
                }
            } catch (error) {
                setIsModalVisible(true)
                setErrorMessage(error)
            }
            setClientInf({
                name: "",
                table: "",
            })
        }
    }

    return (
        <div className={styles.hall_attendance_container}>
            <Header children='Atendimento' img={Logo} alt={'Logo da Burger Heroes'} />
            <div className={styles.main_hall_attendance}>
                <NavStatus firstLink='/HallAttendance' nameFirstLink='Novo Pedido' secondLink='/HallAttendanceStatus' nameSecondLink='Pedidos Prontos'
                    thirdLink='/Summary' nameThirdLink='Histórico'
                />
                {isModalVisible &&
                    <Modal className='modal active'
                        onClose={() => setIsModalVisible(false)}>{errorMessage}
                    </Modal>
                }
                <section className={styles.container_buttons_menu}>
                    <div className={styles.menu}>
                        <Button customClass='hall_attendance_menu' id='breakfast' children='Café da Manhã' clickFunction={() => getMenu("breakfast")}
                        />

                        <Button customClass='hall_attendance_menu' id='all-day' children='Hamburgers' clickFunction={getFlavor}

                        />
                        <Button customClass='hall_attendance_menu' id='all-day' children='Acompanhamento' clickFunction={() => getMenu("side")}

                        />
                        <Button customClass='hall_attendance_menu' id='all-day' children='Bebidas' clickFunction={() => getMenu("drinks")}
                        />
                    </div>
                    {selectFlavors &&
                        <div className={styles.flavors}>
                            <Button customClass='hall_attendance_menu' children='Carne' clickFunction={() => menuFlavor("carne")}
                            />
                            <Button customClass='hall_attendance_menu' children='Frango' clickFunction={() => menuFlavor("frango")}
                            />
                            <Button customClass='hall_attendance_menu' children='Vegetariano' clickFunction={() => menuFlavor("vegetariano")}
                            />
                        </div>
                    }
                </section>
                <section className={styles.container_order}>
                    <ul className={styles.container_products}>
                        {productList.map((item) => {
                            return (
                                <div className={styles.products} key={item.id}>
                                    <ProductCard
                                        name={item.name}
                                        image={item.image}
                                        flavor={item.flavor}
                                        complement={item.complement !== null ? "+ " + item.complement : ""}
                                        price={new Intl.NumberFormat("br-BR", { style: "currency", currency: "BRL" }).format(item.price)}
                                        clickFunction={() => chooseOrder(item)}
                                    />
                                </div>
                            )
                        })}
                    </ul>
                    <section className={styles.command_main}>
                        <h1 className={styles.title}>Pedido</h1>
                        <Input customClass='input_name_client' type='text' id='name' placeholder='Cliente' handleOnChange={getChange} value={clientInf.name} />
                        <Input customClass='input_number_table' type='number' id='table' placeholder='Mesa' handleOnChange={getChange} value={clientInf.table} />
                        <ul>
                            {orderList.map((item) => {
                                const checkFlavor = item.flavor === null;
                                return (
                                    <div key={item.id}>
                                        <Command
                                            name={checkFlavor ? item.name : item.name + " - " + item.flavor}
                                            qtd={item.qtd}
                                            price={item.qtd * item.price}
                                            complement={item.complement !== null ? item.complement : ""}
                                            removeItem={() => removeItem(item)}
                                            addItem={() => chooseOrder(item)}
                                        />
                                    </div>
                                )
                            })
                            }
                        </ul>
                        <p className={styles.total}>Total: {sum()}</p>
                        <div className={styles.finalize}>
                            <Button customClass='button_finalize' clickFunction={getSubmit} type='button' children='Finalizar Pedido' />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default HallAttendance;
