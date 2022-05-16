import styles from "./Button.module.css";
function Button() {

  return (
    <div className={styles.DivBtn}>
      <button type="button" className={styles.btn}></button>
    </div>
  );
}
export default Button;
