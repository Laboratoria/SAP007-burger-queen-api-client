import { FaLinkedin, FaGithub} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return <footer className={styles.footer}>
        <ul  className={styles.social_list}>
            <li>
                <FaLinkedin/>
            </li>
            <li>
                <FaGithub/>
            </li>
        </ul>
            <p className={styles.text}>Projeto desenvolvido por Raele Pereira</p>
    </footer>
    
    
}

export default Footer