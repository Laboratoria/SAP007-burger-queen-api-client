import styles from "./style.module.css";

function Input({type, name, placeholder, onChange,value}) {
  return (
      <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className={styles.Input}/>
  )
};
export default Input;