import React from "react";
import { Link } from "react-router-dom";
import { getRole } from "../services/token";
import styles from './NavStatus.module.css';

function NavStatus({ firstLink, nameFirstLink, secondLink, nameSecondLink, thirdLink, nameThirdLink }) {
    const kitchenRole = getRole() === "kitchen";

    return (
        <nav>
            <ul className={styles.nav_status}>
                <li><Link className={styles.nav_link} to={firstLink}>{nameFirstLink}</Link></li>
                <li><Link className={styles.nav_link} to={secondLink}>{nameSecondLink}</Link></li>
                {!kitchenRole &&
                    <li><Link className={styles.nav_link} to={thirdLink}>{nameThirdLink}</Link></li>
                }
            </ul>
        </nav>
    )
}
export default NavStatus;