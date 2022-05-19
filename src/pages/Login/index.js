import Input from "../../components/Inputs";
import Button from "../../components/button";
import Header from "../../components/header";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import {useState} from 'react';
import "./styles.modules.css";

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function loginUser(email, password) {
        console.log(email, password)
    }
    loginUser(email, password);

    return (
        <>
            <Header />
            <section className="container-login">
                <aside className="container-banner">
                    <Banner className="banner" />
                </aside>
                <form className="login" onSubmit={loginUser}>
                    <Input className="email" type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input className="password" type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)} />
                    <Button className="button-login" type="submit" nome="Entrar" />
                    <a className="register-link" href="/register"> Ou cadastre-se aqui</a>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Login; 