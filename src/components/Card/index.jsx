import styles from "./style.module.css"
// puxar a lista de produtos
function Card ({product, onClick}){
  return(
         <ul className={styles.DivCard} onClick={onClick}>
         <li>
          <p>{product.name}</p>
          </li>
          <li>
          <p>R${(product.price).toFixed(2)}</p>
          </li>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}
          <li>
            <p>{product.qtd}</p>
          </li>
      </ul>
  )
}
export default Card