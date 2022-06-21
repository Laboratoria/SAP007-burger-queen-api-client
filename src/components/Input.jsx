import React from "react";
import styles from './Input.module.css';

function Input({ type, name, id, placeholder, handleOnChange, customClass }) {
    return (
        <input
            className={styles[customClass]}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
}

export default Input;