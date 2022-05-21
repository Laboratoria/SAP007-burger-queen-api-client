import styles from "./style.module.css";
export const Button =({type, text, onClick}) => {
  return (
      <button type={type}className={styles.btn} onClick={onClick}> {text} </button >
  );
}

