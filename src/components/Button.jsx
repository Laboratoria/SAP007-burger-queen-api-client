import React from "react";
import styles from './Button.module.css';

function Button({ children, clickFunction, type, customClass }) {
    return (
        <button className={styles[customClass]} type={type} onClick={clickFunction}>{children}</button>
    )
}
export default Button;