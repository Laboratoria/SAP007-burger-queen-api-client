import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { createUser } from "../../services/authApi.jsx";
import { setTokenAndRole } from "../../services/localStorge.jsx"

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

    const [msgError, setMsgError] = useState("")

    const handleChange = (e) => {

        const { name, value } = e.target

        setValues({ ...values, [name]: value })

    }

    const onSubmit = async (e) => {
        e.preventDefault();
        setMsgError('')
        console.log(values)

        if (values.password !== values.checkPassword) {
            setMsgError('As senhas não coincidem')


        } else {
            try {
            const res = await createUser(values)
                console.log(res)
                switch (res.status) {
                    case 200:
                        const data = await res.json();
                        setTokenAndRole(data.role, data.token);
                        nav(`${data.role}`);
                        break
                    case 403:
                        setMsgError('Email já cadastrado')
                        break
                    default:
                        setMsgError('Algo deu errado, tente mais tarde')
                }
            }
            catch (erro) {

                return erro
            }



        }
    }

    return (
        <>
            <Header />

            <FaArrowCircleLeft className={style.backHome} onClick={() => { nav('/') }} />

            <p className={style.msgError}>{msgError}</p>

            <div className={style.formWrapper}>
                <form className={style.form} onSubmit={onSubmit} >

                    <label className={style.label}>Nome:</label>
                    <Input name="name" type="text" placeholder="Insira seu nome" onChange={handleChange} required />

                    <label className={style.label}>Email:</label>
                    <Input name="email" type="email" placeholder="Insira seu email" onChange={handleChange} required />

                    <label className={style.label}>Senha:</label>
                    <Input name="password" type="password" placeholder="Insira sua senha" onChange={handleChange} required />

                    <label className={style.label}>Confirme sua senha:</label>
                    <Input name="checkPassword" type="password" placeholder="Confira sua senha" onChange={handleChange} required />

                    <div className={style.checkWrapper}>

                        <div className={style.roleWrapper}>
                            <label className={`${style.label} ${style.labelRadio}`}>Salão:</label>
                            <Input name="role" className={style.inputRadio} type="radio" value="hall" onChange={handleChange} required />
                        </div>

                        <div className={style.roleWrapper}>
                            <label className={`${style.label} ${style.labelRadio}`}>Cozinha:</label>
                            <Input name="role" className={style.inputRadio} type="radio" value="kitchen" onChange={handleChange} required />
                        </div>

                    </div>

                    <Button style={style.btnRegister} type="submit" textBtn="Cadastre-se" />

                </form>

            </div>

            <Footer />
        </>
    )
}

export default Register