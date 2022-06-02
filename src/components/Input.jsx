import styles from './Input.module.css';

export function Input({ type, text, name, placeholder, handleOnChange }) {
    return (
        <input
            className={styles.input}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
}