import styles from "./style.module.css"
import { FaRegPlusSquare } from "react-icons/fa"

function Card({ product, onClick }) {
  return (
    <div className={styles.DivCard}>
      <ul className={styles.UlCard}>
        <li>
          <p className={styles.id}>{product.id}</p>
          <p>{product.name}</p>
          <p>R${(product.price).toFixed(2)}</p>
          {product.flavor ? <p>{product.flavor}</p> : null}
        </li>
        <FaRegPlusSquare data-testid="icon" onClick={onClick} size="20px" className='sum' />
      </ul>
    </div>
  )
}
export default Card;