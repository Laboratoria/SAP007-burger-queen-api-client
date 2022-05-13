import styles from "./Button.module.css";
function Button() {
  function Login(e){
    e.preventDefault()
   console.log('logou')
  }
  return (
    <div className={styles.DivBtn}>
      <button type="button" onClick={Login} className={styles.btn}>
       LOGAR
      </button>
    </div>
  );
}
export default Button;
