import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";

function TemplateOrder({product,onClickRemove}) {
  return (
      <ul className={styles.UlTemplateOrder}>
         <li>
          {product.id ? <p></p>:null}
          <p>Produto:{product.name}</p>
          <p>Complemento:{product.complement}</p>
          <p>R${(product.price)}</p>
          {product.flavor ? <p>{product.flavor}</p>:null}
            <p>Quantidade:{product.qtd}</p>
            <div data-testid="icon" className="bin" onClick={onClickRemove}>
              <FaTrash />
           </div>
          </li>
      </ul>  
  )
};
export default  TemplateOrder;
