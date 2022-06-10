import styles from "./style.module.css";

function Header({ children,img, alt }) {
    return (
        <div className={styles.DivHeader}>
            <img src={img} alt={alt}className={styles.person} />
            <h1 className={styles.title}>{children}</h1>
        </div>
    )
}
export default Header;