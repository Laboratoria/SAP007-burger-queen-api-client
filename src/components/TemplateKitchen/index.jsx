import styles from "./style.module.css";
import button from "../Button/button.module.css";
import Button from "../Button";

function TemplateKitchen( props ) {
  return (
    <ul className={styles.UlTemplateKitchen}>
      <li className={styles.liTemplateKitchen}>
        <Button children={props.status} className={button.btnStatus} onClick={props.update}/>
        <p>N°:{props.id}</p>
        <p>Cliente: {props.client}</p>
        <p>Mesa:{props.table}</p>
        <p>Criado:{props.createdAt}</p>
        {props.flavor ? (
          <p>{props.flavor}</p>
        ) : null}
        <p>{props.qtd}</p>
        <p>Atulização:{props.updatedAt}</p>
        <p>Preparo:{props.processedAt}</p>
        <p>Pronto:{props.preparedAt}</p>
        <p>Produtos:</p>
        {props.products.map((product)=>{
         return (
           <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.flavor}</p>
          <p>{product.complement}</p>
          <p>{product.qtd}</p>
          </div>
          )
        })}
      </li>
    </ul>
  );
}
export default TemplateKitchen;
