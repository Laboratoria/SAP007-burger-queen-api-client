import styles from "./style.module.css"

function Card ({item, price}){
    return(
        <div className={styles.DivCard}>
            <div className={styles.DivCardItem}>
            <p>{item}</p>
            <h2>{price}</h2>
            </div>
        </div>
    )
}
export default Card