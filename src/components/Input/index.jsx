import styles from "./style.module.css"
function Input({type, name, placeholder, onChange,value, pattern, title}) {
  return (
    <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className={styles.Input} pattern={pattern} title={title}/>
  );
}
export default Input;

