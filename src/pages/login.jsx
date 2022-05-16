import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import Button from "../components/Button";
import Logo from "../components/Logo";

function logedIn(){
    console.log("Logando usuário")
}
function Login() {
    return (
      <div >
        <Logo />
        <InputEmail/>
        <InputPassword />
        <Button onClick={logedIn} text="LOGAR"/>
        <a href="/register"className="Hiperlink">Cadastre-se</a>
      </div>
    );
  }
  
  export default Login;
  