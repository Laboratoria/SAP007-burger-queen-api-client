import Input from "../../components/Inputs";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./styles.modules.css";
import Checkbox from "../../components/Checkbox";

function Register() {
    return (
        <>
            <Header />
            <section className="container-register">
                <aside className="container-banner">
                    <Banner className="banner" />
                </aside>
                <form className="register">
                    <Input className="user-name" type="text" placeholder="Nome" />
                    <Input className="email" type="email" placeholder="email@email.com" />
                    <Input className="password" type="password" placeholder="senha" />
                    <div className="checkbox">
                        <Checkbox className="user-kitchen" type="checkbox" label="Atendimento"/>
                        <Checkbox className="user-waitress" type="checkbox" label="Cozinha"/>
                    </div>
                    <Button className="button-register" type="button" nome="Cadastrar" />
                    <a className="login-link" href="/"> Ou entre aqui</a>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Register; 