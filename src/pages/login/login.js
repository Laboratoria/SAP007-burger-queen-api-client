import Input from "../../components/inputs/inputs";
import Button from "../../components/button/button";

function Login() {
    return (
        <section>
            <form className="login">
                <Input className="email" type="email" placeholder="email" />
                <Input className="password" type="password" placeholder="senha" />
                <Button className="button-login" type="button" nome="Entrar"/>
                
            </form>
        </section>
    );
}

export default Login;