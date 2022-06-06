import styles from './Footer.module.css';

export function Footer() {
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.ecoText}><img className={styles.iconImage} src={require('../images/Sprout.png')} alt="imagem-eco" /> Este estabelecimento é amigo da natureza e utiliza produtos, embalagens e utensílios que não agridem o meio ambiente.</p>
                <p className={styles.developers}>Desenvolvido por
                    <a className={styles.devNames}
                        href="https://github.com/Fe-Monteiro"
                        target="_blank"
                        rel="noreferrer"
                    > <img className={styles.iconImage} src={require('../images/githubicon.png')} /> Fernanda Monteiro </a> e
                    <a className={styles.devNames}
                        href="https://github.com/natalieiss"
                        target="_blank"
                        rel="noreferrer"
                    > <img className={styles.iconImage} src={require('../images/githubicon.png')} /> Natalie Silva </a>
                </p>
            </footer>
        </>
    )
}