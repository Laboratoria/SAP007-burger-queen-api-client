import styles from "./style.module.css";
export const Button =({type, text, onClick}) => {
  return (
    <div className={styles.DivBtn}>
      <button type={type}className={styles.btn} onClick={onClick}> {text} </button >
    </div>
  );
}

