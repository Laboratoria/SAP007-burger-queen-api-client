import styles from "./style.module.css";

function TemplateOrder({ order, onChange}) {
  return (
    <div className={styles.DivPurschaseOrder} order={order} onChange={onChange}></div>
  )
};
export default  TemplateOrder;
