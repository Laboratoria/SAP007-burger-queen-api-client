import React from "react";
import { useNavigate } from "react-router-dom";
import { removeLogin } from "../services/token";
import Button from '../components/Button';
import styles from "./HallClient.module.css"

//import Login from "./Login"

function HallClient() {

    const navigate = useNavigate();
    function Logout() {
        removeLogin();
        navigate('/')
    }

    return (
        <>
            <h1 className={styles.description}>Página em construção.</h1>
            <div>
                <img src={require('../images/thanoshand.png')} alt="thanos-hand" className={styles.thanos_img} />
            </div>
            <div>
                <Button customClass='button_logout' children='Sair' clickFunction={Logout} />
            </div>
        </>
    )
}

export default HallClient;