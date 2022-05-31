import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../componentes/Button";
import Logo from "../../img/logo.svg"
import style from './home.module.css'

const Home = () => {
    const nav = useNavigate();

    return (
      <>
      <picture className={style.containerLogo}>
          <img src={Logo} alt="Logo" className={style.logo}/>
      </picture>

      <Button style={style.btnLogin} onClick={() => { nav('/login') }}>Login</Button>    
    <p className={style.noRegister}>Não tem cadastro?
    <Button style={style.btnRegister} onClick={() => { nav('/register') }}>Cadastre-se</Button></p>
    </>  
    
          
    
 )
}

export default Home 