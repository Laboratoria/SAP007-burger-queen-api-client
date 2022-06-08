import styles from './Input.module.css';

function Input({ type, text, name, placeholder, handleOnChange, customClass }) {
    return (
        <input
            className={styles[customClass]}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            onChange={handleOnChange}
        />
    )
}

export default Input;