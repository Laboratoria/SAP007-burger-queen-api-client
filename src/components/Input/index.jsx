import styles from "./style.module.css";
function Input({type, name, placeholder, onChange}) {
  return (
    <div className={styles.DivInput}>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} className={styles.Input}/>
    </div>
  );
}
export default Input;
