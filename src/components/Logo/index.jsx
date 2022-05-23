import  logo from "../../img/logo.jpeg"
import styles from "./style.module.css"
function Logo(){
  return(
    <img src={logo} alt="logo"  className={styles.LogoImg}></img>
  )
}
export default Logo