import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

export const Navbar = () => {

    return (
        <nav
            // className="navbar is-primary"
            role="navigation"
        // aria-label="main navigation"
        >
            <div className={styles.navbar}>

                <div >
                    <div className={styles.list}>
                        <NavLink to="/" className={styles.item}>
                            Home
                        </NavLink>

                        <NavLink to="/Login" className={styles.item}
                        >
                            Atendimento
                        </NavLink>

                        <NavLink className={styles.item} to="/Login"
                        >
                            Cozinha
                        </NavLink>

                        <NavLink className={styles.item}
                            to="/Client"
                        >
                            Área do cliente
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};