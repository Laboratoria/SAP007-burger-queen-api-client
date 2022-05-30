import styles from "./style.module.css";

function Role({type, name, placeholder, onChange,value,label}) {
  return (
    <label>
      <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className={styles.Radio} required/>{label}
      </label>  
  );
}

export default Role;