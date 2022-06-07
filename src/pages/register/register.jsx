import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { createUser } from "../../services/authApi.jsx";

import Input from "../../componentes/Input/Input.jsx";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import Button from "../../componentes/Button.jsx";

import style from "../register/register.module.css";


const Register = () => {
    const nav = useNavigate()

    const initValues = {
        name: "",
        email: "",
        password: "",
        checkPassword: "",
        role: "",
    }

    const [values, setValues] = useState({ initValues });

    // const [msgError, setMsgError] = useState("")

    const handleChange = (e) =>{

        const {name, value} = e.target

        setValues({...values[name], value})

    }








    return (
        <>
            <Header />

            <FaArrowCircleLeft className={style.backHome} onClick={() => { nav('/') }} />

            <div className={style.formWrapper}>

                <form className={style.form} onSubmit={onSubmit} >

                    <label className={style.label}>Nome:</label>
                    <Input name="name" type="text" placeholder="Insira seu nome" onChance={handleChange} required />

                    <label className={style.label}>Email:</label>
                    <Input name="email" type="email" placeholder="Insira seu email" onChance={handleChange} required />

                    <label className={style.label}>Senha:</label>
                    <Input name="password" type="password" placeholder="Insira sua senha" onChance={handleChange} required />

                    <label className={style.label}>Confirme sua senha:</label>
                    <Input name="checkPassword" type="password" placeholder="Confira sua senha" onChance={handleChange} required />

                    <div className={style.checkWrapper}>

                        <div className={style.roleWrapper}>
                            <label className={`${style.label} ${style.labelRadio}`}>Salão:</label>
                            <Input name="role" className={style.inputRadio} type="radio" value="hall" onChance={handleChange} required />
                        </div>

                        <div className={style.roleWrapper}>
                            <label className={`${style.label} ${style.labelRadio}`}>Cozinha:</label>
                            <Input name="role" className={style.inputRadio} type="radio" value="kitchen" onChance={handleChange} required />
                        </div>

                    </div>

                    <Button style={style.btnRegister} type="submit" textBtn="Cadastre-se" />

                </form>

            </div>

            <Footer />
        </>
    )
}

export default Register;