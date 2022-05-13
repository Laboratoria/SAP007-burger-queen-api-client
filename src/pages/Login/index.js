import Input from "../../components/Inputs";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./styles.css"

function Login() {
    return (
        <>
            <Header />
            <section className="container-login">
            <aside className="container-banner">
                <Banner className="banner" />
            </aside>
                <form className="login">
                    <Input className="email" type="email" placeholder="email" />
                    <Input className="password" type="password" placeholder="senha" />
                    <Button className="button-login" type="button" nome="Entrar" />
                    <p className="register-link">Ou cadastre-se aqui</p>
                </form>
            </section>
            <Footer />
        </>
    );
}

export default Login;