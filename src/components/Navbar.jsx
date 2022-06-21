import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {

    return (
        <nav className={styles.navbar} role="navigation">
            <div className={styles.list}>
                <NavLink className={styles.item} to="/Login" >Atendimento</NavLink>
                <NavLink className={styles.item} to="/Login">Cozinha</NavLink>
                <NavLink className={styles.item}to="/Login">Área do cliente</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;