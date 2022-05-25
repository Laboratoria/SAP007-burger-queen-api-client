import styles from "./style.module.css";
import finn from "../../img/finn.jpeg"

function Header({children}){
    return(
        <div className={styles.DivHeader}>
            <img src={finn} alt="Finn comendo um sanduíche" className={styles.finn}/>
            <h1 className={styles.title}>{children}</h1>

        </div>
    )
}
export default Header