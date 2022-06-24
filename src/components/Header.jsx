import React from "react";
import { useNavigate } from "react-router-dom";
import { removeLogin } from "../services/token";
import Button from './Button';
import styles from "./Header.module.css";

function Header({ img, alt, children }) {
    const navigate = useNavigate();
    function Logout() {
        removeLogin();
        navigate('/')
    }

    return (
        <header className={styles.header}>
            <img src={img} alt={alt} className={styles.header_logo} />
            <h1 className={styles.header_title}>{children}</h1>
            <div>
                <Button customClass='button_logout' children='Sair' clickFunction={Logout} />
            </div>
        </header>
    )
}
export default Header;