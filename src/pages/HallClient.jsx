import React from "react";
import { useNavigate } from "react-router-dom";
import { removeLogin } from "../services/token";
import Button from '../components/Button';
import styles from "./HallClient.module.css"

function HallClient() {

    const navigate = useNavigate();
    function Logout() {
        removeLogin();
        navigate('/')
    }

    return (
        <>
            <main className={styles.img_content}>
                <img src={require('../images/thanoshand.png')} alt="thanos-hand" className={styles.thanos_img} />
                <h1 className={styles.description}>Ops... O Thanos destruiu esta página, estamos reconstruindo.</h1>
                <div>
                    <Button customClass='button_logout' children='Sair' clickFunction={Logout} />
                </div>
            </main>
        </>
    )
}

export default HallClient;