import React from "react";
import Button from "./Button";
import styles from './Command.module.css';

const Command = ({ name, removeItem, qtd, addItem, complement, price }) => {
    return (
        <li className={styles.item_command}>
            <p className={styles.item_name}>{name}</p>
            <div className={styles.item_qtd}>
                <Button customClass='button_qtd' children='-' clickFunction={removeItem} />
                <p className={styles.number_qtd}>{qtd}</p>
                <Button customClass='button_qtd' children='+' clickFunction={addItem} />
            </div>
            <p className={styles.complement}>{complement}</p>
            <p className={styles.item_price}>R${price},00</p>
        </li>
    )
}

export default Command;