import styles from "./style.module.css";
function Input({type, name, placeholder, onChange}) {
  return (
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} className={styles.Input}/>
  );
}
export default Input;
