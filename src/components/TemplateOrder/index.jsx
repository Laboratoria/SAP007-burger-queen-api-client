import styles from "./style.module.css";
// import Button from '../Button';
import { FaTrash } from "react-icons/fa";


function TemplateOrder( {product,onClickRemove} ) {

  return (
    <div className={styles.DivTemplateOrder}>
      <ul className={styles.UlTemplateOrder}>
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
            <div className='bin' onClick={onClickRemove}>
              <FaTrash />
           </div>
          </li>
      </ul>  
    </div>
  )
};
export default  TemplateOrder;
