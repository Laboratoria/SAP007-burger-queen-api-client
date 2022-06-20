import styles from "./styles.css";
import plusIcon from "../../Images/plus-icon.png";

function Card({ product, onClick }) {
  return (
    <div className="container-card">
      <ul className={styles.DivCard}>
        <li>
          <p>{product.name}</p>
        </li>
        {product.flavor ? (
          <li>
            <p>{product.flavor[0].toUpperCase() + product.flavor.substr(1)}</p>
          </li>
        ) : null}
        {product.complement ? (
          <li>
            <p>{product.complement[0].toUpperCase() + product.complement.substr(1)}</p>
          </li>
        ) : null}
      </ul>
      <li>
        <p>R$ {product.price.toFixed(2)}</p>
      </li>
      <button type="button" onClick={onClick} className="add-button">
        <img src={plusIcon} alt="Adicionar Produto" className="plus-icon"></img>
      </button>
    </div>
  );
}
export default Card;
