import styles from "./Footer.module.css"
function Footer(){
  return(
    <p className={styles.footer}>Desenvolvido por
      <a href="https://www.linkedin.com/in/marione-tainara-da-sp/" target="_blank" > Marione Pereira </a>  | 
       <a href="https://www.linkedin.com/in/thais-moreira-bonalume/" target="_blank"> Thaís Bonalume</a>
       </p>
  )
}
export default Footer 