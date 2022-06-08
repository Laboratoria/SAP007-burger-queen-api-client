import styles from "./style.module.css";
import Button from "../Button";

function TemplateKitchen( props ) {
  return (
    <ul className={styles.UlTemplateKitchen}>
      <li>
        <Button children={props.status} onClick={props.update}/>
        <p>Id:{props.id}</p>
        <p> Cliente: {props.client}</p>
        <p> Mesa:{props.table}</p>
        <p>Criado:{props.createdAt}</p>
        {props.flavor ? (
          <p>{props.flavor}</p>
        ) : null}
        <p>{props.qtd}</p>
        <p>Atulização:{props.updatedAt}</p>
        <p>Produtos:</p>
        {props.products.map((product)=>{
         return (
           <div key={product.id}>
          <p> {product.name}</p>
          <p> {product.flavor}</p>
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
