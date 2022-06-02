import styles from './Button.module.css';

function Button({children, clickFunction, type}) {
    return (
        <button className={styles.button_enter} type={type} onClick={clickFunction}>{children}</button>
    )
}
export default Button;