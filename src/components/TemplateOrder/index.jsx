import styles from "./style.module.css";
import { FaTrash } from "react-icons/fa";

function TemplateOrder( {product,onClickRemove}) {
  return (
      <ul className={styles.UlTemplateOrder}>
         <li>
          {product.id ? <p></p>:null}
          <p>Produto:{product.name}</p>
          <p>Complemento:{product.complement}</p>
          <p>R${(product.price).toFixed(2)}</p>
          {product.flavor ? <li><p>{product.flavor}</p></li>:null}
            <p>Quantidade:{product.qtd}</p>
            <div className="bin" onClick={onClickRemove}>
              <FaTrash />
           </div>
          </li>
      </ul>  
  )
};
export default  TemplateOrder;
