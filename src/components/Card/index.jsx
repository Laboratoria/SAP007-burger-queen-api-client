import styles from "./style.module.css"
<<<<<<< HEAD

function Card ({item, price}){
    return(
        <div className={styles.DivCard}>
            <div className={styles.DivCardItem}>
            <p>{item}</p>
            <h2>{price}</h2>
            </div>
        </div>
    )
=======
// puxar a lista de produtos
function Card ({product,name, price,flavor}){
  return(
      <ul className={styles.DivCard}>
         <li>
          <p>{product.name}</p>
          </li>
          <li>
          <p>R${(product.price).toFixed(2)}</p>
          </li>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}
          
         
      </ul>
  )
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
}
export default Card