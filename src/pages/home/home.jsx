import React from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../../componentes/Button";
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

        <button style={style.btnLogin} onClick={() => { nav('/login') }}>Login</button>

        <p className={style.noRegister}>Não tem cadastro?
          <button style={style.btnRegister} onClick={() => { nav('/register') }}>Cadastre-se</button></p>
      </section>

      
      <Footer />
    </>


  )
}

export default Home 