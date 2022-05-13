import styles from "./Input.module.css";
function InputEmail() {
  return (
    <div className={styles.DivInput}>
      <input type="email" placeholder='E-MAIL'className={styles.Input}></input>
    </div>
  );
}
export default InputEmail;
