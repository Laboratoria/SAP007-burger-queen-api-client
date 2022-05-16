import Input from "../components/Input";
import {Button} from "../components/Button";
import Logo from "../components/Logo";
import {Link} from "react-router-dom";

function logedIn(){
    console.log("Logando usuário")
}


function Login() {
    return (
      <form >
        <Logo />
        <Input type="email" placeholder="E-MAIL"/>
        <Input type="password" placeholder="SENHA"/>
        <Button text="LOGAR" type= "button" onClick={logedIn} />
        <Link to="/register"className="Hiperlink">Cadastre-se</Link>
      </form>
    );
  }
  
  export default Login;
  