import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";

function TemplateOrder({ product, onClickRemove }) {
  return (
    <ul className={styles.UlTemplateOrder}>
      <li>
        {product.id ? <p></p> : null}
        <p>Produto:{product.name}</p>
        {product.flavor ? <p>Complemento:{product.complement}</p> : null}
        <p>R${(product.price)}</p>
        {product.flavor ? <p>{product.flavor}</p> : null}
        <p>Quantidade:{product.qtd}</p>
        <button data-testid="icon" className={styles.bin} onClick={onClickRemove}>
          <FaTrash />
        </button>
      </li>
    </ul>
  )
};
export default TemplateOrder;
