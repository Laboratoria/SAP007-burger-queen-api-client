import styles from "./style.module.css";

function TemplateOrder( {product, onClick} ) {
  return (
    <div className={styles.DivPurschaseOrder} onClick={onClick}>
      <ul>
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
};
export default  TemplateOrder;
