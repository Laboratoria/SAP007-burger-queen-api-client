import Input from "../../components/Inputs";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import "./styles.modules.css";
import Checkbox from "../../components/Checkbox";
import {useState} from 'react';

function Register() {
    function registerUser(e) {
        e.preventDefault()
        console.log("clicou")
        console.log(name)
        console.log(email)
        console.log(password)
        // console.log(user)
        const body = {
            "name": name,
            "email": email,
            "password": password,
            "role": role,
            "restaurant": "Tá chovendo hambúrguer"
          }
        const callApi = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        }
        fetch("https://lab-api-bq.herokuapp.com/users", callApi)
        .then(response => response.json())
        .then(data =>{
            debugger;
            console.log(data)
        })

    }

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();

    return (
        <>
            <Header />
            <section className="container-register">
                <aside className="container-banner">
                    <Banner className="banner" />
                </aside>
                <form className="register" onSubmit={registerUser} required> 
                    <Input className="user-name" type="text" placeholder="nome" name="name" onChange={(e) => setName(e.target.value)} />
                    <Input className="email" type="email" placeholder="email@email.com" name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input className="password" type="password" placeholder="senha" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <div className="checkbox">
                        <Checkbox name="role" className="user-waitress" value="waitress" checked={role === "waitress"} onChange={(e) => setRole(e.target.value)} label="Atendimento"/>
                        <Checkbox name="role" className="user-kitchen" value="kitchen" checked={role === "kitchen"} onChange={(e) => setRole(e.target.value)} label="Cozinha"/>
                    </div>
                    <Button className="button-register" type="submit" nome="Cadastrar"/>
                    <a className="login-link" href="/"> Ou entre aqui</a>
                </form>
            </section>
            <Footer />
        </>
    );
};

export default Register; 