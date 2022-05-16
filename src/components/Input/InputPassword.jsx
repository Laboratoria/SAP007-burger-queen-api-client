import styles from "./Input.module.css"
function InputPassword(){
  return(
   <div className={styles.DivInput}>
     <input type="password" className={styles.Input}placeholder="SENHA"></input>
   </div>
  )
 }
 export default InputPassword