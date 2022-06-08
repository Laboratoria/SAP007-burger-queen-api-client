import styles from "./Header.module.css";

function Header({ img, alt, children }) {
    return (
        <div className={styles.header}>
            <img src={img} alt={alt} className={styles.header_logo} />
            <h1 className={styles.header_title}>{children}</h1>
        </div>
    )
}
export default Header;