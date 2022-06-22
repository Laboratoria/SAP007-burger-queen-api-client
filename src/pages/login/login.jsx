import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { userLogin } from "../../services/authApi.jsx";
import { setTokenAndRole } from "../../services/localStorge.jsx"

import Input from "../../componentes/Input/Input.jsx";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";
import Button from "../../componentes/Button.jsx";

import style from "../login/login.module.css";

const Login = () => {
    const nav = useNavigate()

    const initValues = {
        email: "",
        password: "",
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
            try {
            const res = await userLogin(values)
                switch (res.status) {
                    case 200:
                        const data = await res.json();
                        setTokenAndRole(data.role, data.token);
                        nav(`/${data.role}`);
                        break
                    case 400:
                        setMsgError("Email/Senha inválidas")
                        break;
                    default:
                        setMsgError("Ops! Tente novamente mais tarde.")
                }
            }
            catch (erro) {
             return erro
            }

        }
    

    return (
        <>
            <Header />

            <FaArrowCircleLeft className={style.backHome} onClick={() => { nav('/') }} />

            <p className={style.msgError}>{msgError}</p>

            <div className={style.formWrapper}>

                <form className={style.form} onSubmit={onSubmit}>

                    <label className={style.label}>Email:</label>
                    <Input name="email" type="email" placeholder="Insira seu email" onChange={handleChange}  required />

                    <label className={style.label}>Senha:</label>
                    <Input name="password" type="password" placeholder="Insira sua senha" onChange={handleChange} required />

                    <Button style={style.btnLogin} type="submit" textBtn="Logar" />
                </form>
                
            </div>


            <Footer />
        </>

    )
}

export default Login