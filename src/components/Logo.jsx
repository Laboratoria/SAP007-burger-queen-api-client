import styles from "./Logo.module.css"

export default function Logo({ customClass }) {
    return (
        <>
            <a href="/">
                <img className={styles[customClass]} src={require('../images/Logo.png')} alt="logo-heroes" />
            </a>
        </>
    )
}