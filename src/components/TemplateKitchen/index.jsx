import styles from "./style.module.css";
import Button from "../Button";

function TemplateKitchen({ products }) {
  return (
      <ul className={styles.UlTemplateKitchen}>
      <li>
          <Button children={products.status} />
          <p>Criado:{products.createdAt}</p>
          <p>Id:{products.id}</p>
          <p> Cliente: {products.client_name}</p>
          <p> Mesa:{products.table}</p>
        {products.flavor ? (
            <p>{products.flavor}</p>
        ) : null}
          <p>{products.qtd}</p>
          <p>Atulização:{products.updatedAt}</p>
        </li>
      </ul>
  );
}
export default TemplateKitchen;