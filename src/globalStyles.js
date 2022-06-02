import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;     
}


body {
    color: ;
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    background-color: #F7F7FF;

    @media (min-width: 768px) {
    font-size: 1.5em;
  }
}
   
p {
    color: #F7F7FF;
    font-size: 20px;
}

.p-product {


}

h3 {
    text-align: center;
}
.p-comanda {
    text-align: center;
    color: #531cb3;
}

.p-voltar {
   color: #531CB3;
   textAlign: center;
   background-color: #F7F7FF;
   border-radius: 0.4rem;
   text-align: center;
   margin: auto;
   margin-top: 10px;
   height: 45px;
}

.buttons-register-return {
    width: 100%;
    text-align: center;
}

.container {
    
    width: 70vh;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    border-radius: 12px;
    

    @media (min-width: 1024px) {
        width: 80%;       
    } 
}
.container-register {
    height: 100vh;
    margin-bottom: 100px;
    
}

.container-login {
    height: 415px;
    margin-bottom: 100px;
}

.container-login, .container-register {
  
    background-color: #F7F7FF;
    padding-top: 20px;
    width: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 darkgrey;
}

.container-client-data {
    width: 350px;
    display: inline-block
}

.container-menu {
   margin-top: 0.8em;
   margin-left: 0;
   margin-bottom: 100px;
}

.container-modal-menu {
    display: flex;
    width: 500px;
    justify-content: center;
    text-align: left;
}

.container-teste-order {
    margin-left: 24vh;
}

.div-btn-prepare-finish-order {
    display: flex;
    justify-content: center;
}

.ocultar-senha {
    position: absolute;
    
}

.login-eye {
    cursor: pointer;
    margin-left: -30px;
    
}

.img-capa {
    width: 90px;
    height:
    display: flex;
}


@keyframes up {
    from {
        opacity: 0;
        transform: translateY(15px);
    }

    to {
        opacity: 1;
    }
}

.effect-up {
    animation: up 1s;
   
}

.page-not-found {
    background-color: white;
    text-align: center;
    height: 100vh;
}

.page-not-found p {
    padding-top: 2em;
}

.data-ready-order-client, data-ready-order-client-client {
    display: flex;
    align-items: center;
    justify-content: center;
    display: grid;
    
    margin-left: 0px;
    margin-right: 0px;
}

.data-ready-order-client-client {
    width: 100%;
    font-size: 1em;
}

.container-client-and-btn {
    display: flex;
    justify-content: center;
}


`;
