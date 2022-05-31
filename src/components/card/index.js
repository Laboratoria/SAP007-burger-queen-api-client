import styles from "./styles.modules.css";
import plusIcon from "../../Images/plus-icon.png"

function Card ({product, onClick}){

    return(
      <div >
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
        <button type="button" onClick={onClick} className="add-button">
            <img src={plusIcon} alt="Adicionar Produto" className="plus-icon"></img>
        </button>
        
        </div>
    )
  }
  export default Card