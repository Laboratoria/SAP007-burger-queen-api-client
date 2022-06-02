import styles from "./style.module.css";
// import jake from "../../img/jake.jpg"
import Button from "../Button";

function TemplateKitchen({ product }) {
  return (
    // <div className={styles.DivHeader}>
    // <img src={jake} alt="Jake comendo uma pizza" className={styles.jake}/>
    // <h1 className={styles.title}>{children}</h1>

    <div className={styles.DivTemplateKitchen}>
      <ul className={styles.UlTemplateKitchen}>

      <li>
          <Button children={product.status} />
        </li>
        <li>
          <p>Criado:{product.createdAt}</p>
        </li>
        <li>
          <p>Id:{product.id}</p>
        </li>
        <li>
          <p> Cliente: {product.client_name}</p>
        </li>
        <li>
          <p> Mesa:{product.table}</p>
        </li>
        {product.flavor ? (
          <li>
            <p>{product.flavor}</p>
          </li>
        ) : null}
        <li>
          <p>{product.qtd}</p>
        </li>
        <li>
          <p>Atulização:{product.updatedAt}</p>
        </li>
      </ul>
    </div>
  );
}
export default TemplateKitchen;
