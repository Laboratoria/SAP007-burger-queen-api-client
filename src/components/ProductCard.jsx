import React from "react";
import Button from "./Button";
import styles from "./ProductCard.module.css";

function ProductCard({ name, flavor, image, complement, price, clickFunction }) {
    return (
        <li className={styles.card}>
            <p className={styles.name_card}>{name} {flavor}</p>
            <img className={styles.img_card} src={image} alt={name}></img>
            <section className={styles.complement}>
                <p className={styles.complement_card}>{complement}</p>
            </section>
            <p className={styles.price_card}>{price}</p>
            <Button customClass="button_add" clickFunction={clickFunction} type='button' children='Adicionar' />
        </li>
    )
}

export default ProductCard;