import styles from "./Home.module.css"
import Logo from "../components/Logo"
import Header from "../layout/Header"

export function Home() {
    return (
        <>
            <h1 className={styles.title}>Bem-vindo ao <Header /></h1>
            <Logo />
            <p className={styles.about}>Sabemos o quanto salvar o mundo é importante!
                Por isso este app optimiza o atendimento dos super heróis do nosso planeta.
                Você pode estar se perguntando se este restaurante é somente para o Batman ou Capitão America.
                Apesar dos heróis da marvel e dc frequentarem esta hamburgueria,
                entendemos que qualquer pessoa que consuma produtos com embalagens e utensílios
                eco-friendly são verdadeiros heróis do planeta, portanto,
                essa hamburgueria foi criada especialmente pra você!
                Para fazer o seu pedido é só estalar os dedos!</p>

        </>
    )
}