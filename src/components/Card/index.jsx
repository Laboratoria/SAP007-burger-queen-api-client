import styles from "./style.module.css"

function Card ({product, onClick}){
  return(
    <div onClick={onClick}>
         <ul className={styles.DivCard}>
         <li>
          <p>{product.id}</p>
          </li>
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
      </div>
  )
}
export default Card;