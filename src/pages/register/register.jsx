import Input from "../../componentes/Input/Input.jsx";
import Header from "../../componentes/Header/Header.jsx"
import Footer from "../../componentes/Footer/Footer.jsx"
// import Button from "../../componentes/Button.jsx"

import style from "../register/register.module.css"

const Register = () => {

    return (
        <>
            <Header />

            {/* <Button style={style.btnRegister} onClick={() => { nav('/home') }}>Cadastre-se</Button>  */}

            <form className={style.form}>

                <label className={style.label}>Nome:

                    <Input name="name" type="text" placeholder="Insira seu nome" required />
                </label>

                <label className={style.label}>Email:
                    <Input name="email" type="text" placeholder="Insira seu email" required />
                </label>

                <label className={style.label}>Senha:
                    <Input name="password" type="password" placeholder="Insira sua senha" required />
                </label>

                <label className={style.label}>Confirme sua senha:
                    <Input name="checkPassword" type="password" placeholder="Confira sua senha" required />
                </label>

                <label className={style.labelRadio}>Salão:
                    <Input name="role" type="radio" value="hall" required />
                </label>

                <label className={style.labelRadio}>Cozinha:
                    <Input name="role" type="radio" value="kitchen" required />
                </label>

                {/* <Button style={style.btnRegister} onClick={() => { nav('/register') }}>Cadastre-se</Button>  */}

            </form>

            <Footer />
        </>
    )
}

export default Register;