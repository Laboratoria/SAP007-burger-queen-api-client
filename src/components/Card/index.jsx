import styles from "./style.module.css"
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
}
export default Card