import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import Logo from '../../img/LogoBQ.png'

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <img src={Logo} alr="hamburguer e coroa"/>
            </Link>
            <ul className={styles.list}>
        <li className={styles.item}>
        <Link to="/">Login</Link>
        </li>
        <li className={styles.item}>
        <Link to="/Register">Register</Link>
        </li>
        <li className={styles.item}>
        <Link to="/Hall">Hall</Link>
        </li>
        <li className={styles.item}>
        <Link to="/Kitchen">Kitchen</Link>
        </li>
        <li className={styles.item}>
        <Link to="/Logout">Logout</Link>
        </li>
    </ul>
    </nav>
    )
}

export default NavBar