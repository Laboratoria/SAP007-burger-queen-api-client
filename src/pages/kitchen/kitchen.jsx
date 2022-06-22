import React from "react";

import Header from "../../componentes/Header/Header.jsx"
import Footer from "../../componentes/Footer/Footer.jsx"

import style from "../kitchen/kitchen.module.css"


function Kitchen() {
    return (
        <>
            <Header />

            <section className={style.section}>
                <h1 className={style.welcome}>Bem-vindo ao Five Starts</h1>
                <h2 className={style.text}>No momento estamos fechados
                    <br/>Confira o horário de funcionamento
                </h2>
            </section>

            <Footer />
        </>

    )
}

export default Kitchen