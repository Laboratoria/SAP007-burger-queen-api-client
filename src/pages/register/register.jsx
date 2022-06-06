import Input from "../../componentes/Input/Input.jsx";
import Header from "../../componentes/Header/Header.jsx";
import Footer from "../../componentes/Footer/Footer.jsx";

import Button from "../../componentes/Button.jsx";
import style from "../register/register.module.css";
import { useNavigate } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


const Register = () => {
    const nav = useNavigate()
    return (
        <>
            <Header />

            <FaArrowCircleLeft className={style.backHome} onClick={() => { nav('/') }} />

            <form className={style.form}>

                <label className={style.label}>Nome:</label>
                <Input name="name" type="text" placeholder="Insira seu nome" required />

                <label className={style.label}>Email:</label>
                <Input name="email" type="email" placeholder="Insira seu email" required />

                <label className={style.label}>Senha:</label>
                <Input name="password" type="password" placeholder="Insira sua senha" required />

                <label className={style.label}>Confirme sua senha:</label>
                <Input name="checkPassword" type="password" placeholder="Confira sua senha" required />

                <label className={style.labelRadio}>Salão:
                <Input name="role" type="radio" value="hall" required />
                </label>

                <label className={style.labelRadio}>Cozinha:
                <Input name="role" type="radio" value="kitchen" required />
                </label>

                <Button style={style.btnRegister} textBtn="Cadastre-se" />

            </form>

            <Footer />
        </>
    )
}

export default Register;