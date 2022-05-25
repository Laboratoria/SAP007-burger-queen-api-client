import styles from "./style.module.css";
<<<<<<< HEAD
import finn from "../../img/finn.jpeg"

function Header({text}){
    return(
        <div className={styles.DivHeader}>
            <img src={finn} alt="Finn comendo um sanduíche" className={styles.finn}/>
            <h1 className={styles.title}>{text}</h1>
=======
import finn from "../../img/finn.jpg"

function Header({children}){
    return(
        <div className={styles.DivHeader}>
            <img src={finn} alt="Finn comendo um sanduíche" className={styles.finn}/>
            <h1 className={styles.title}>{children}</h1>
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
        </div>
    )
}
export default Header