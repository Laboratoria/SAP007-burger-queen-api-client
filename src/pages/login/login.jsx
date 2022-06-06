import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import Input from "../../componentes/Input/Input.jsx";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import style from "../register/register.module.css";
import Button from "../../componentes/Button.jsx";

const Login = () => {

    const nav = useNavigate()
    return (
        <>
            <Header />

            <FaArrowCircleLeft className={style.backHome} onClick={() => { nav('/') }} />

            <form className={style.form}>
            <label className={style.label}>Email:</label>
                <Input name="email" type="email" placeholder="Insira seu email" required />

                <label className={style.label}>Senha:</label>
                <Input name="password" type="password" placeholder="Insira sua senha" required />

                <Button style={style.btnRegister} textBtn="Logar" />

            </form>

            <Footer/>
        </>

    )
}

export default Login