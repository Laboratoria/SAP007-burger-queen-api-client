import styles from "./style.module.css"
function Input({type, name, placeholder, onChange,value, minlengt}) {
  return (
      <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className={styles.Input} minlengt={minlengt}required/>
  );
}
export default Input;
