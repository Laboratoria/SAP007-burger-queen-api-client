import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componentes/Button";
import Logo from "../../img/logo.svg"
import style from './home.module.css'
import Footer from "../../componentes/Footer/Footer";

const Home = () => {
  const nav = useNavigate();
  return (
    <>
      <section>
        <picture className={style.containerLogo}>
          <img src={Logo} alt="Logo" className={style.logo} />
        </picture>

        <Button style={style.btnLogin} onClick={() => { nav('/login') }}  textBtn= "Login"/>

        <p className={style.noRegister}>Não tem cadastro?
         <Button style={style.btnRegister} onClick={() => { nav('/register') }} textBtn= "Cadastre-se"/></p>
      </section>


      <Footer />
    </>


  )
}

export default Home 