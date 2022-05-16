import  logo from "./img/logo.jpeg"
import styles from "./style.module.css"
function Logo(){
  return(
    <div className={styles.Logo}>
    <img src={logo} alt="logo"  className={styles.LogoImg}></img>
    </div>
  )
}
export default Logo