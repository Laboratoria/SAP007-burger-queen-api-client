import styles from "./style.module.css";
function Input({type, placeholder}) {
  return (
    <div className={styles.DivInput}>
      <input type={type} placeholder={placeholder}className={styles.Input}></input>
    </div>
  );
}
export default Input;
