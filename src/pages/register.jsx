import Input from "../components/Input";
import {Button} from "../components/Button";
import {useState} from "react";
import { Link } from "react-router-dom"
import Logo from "../components/Logo";

function Register() {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState("");

  function createUser(e){
      e.preventDefault();
      console.log(`Criando Usuário com ${email} e ${password}`)
  }
  
  return (
    <form onSubmit={createUser}>
      <Logo />
      <Input type="email" placeholder="E-MAIL" htmlFor="email" value="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
      <Input type="password" placeholder="SENHA"htmlFor="password" value="password" id="password"onChange={(e) => setPassword(e.target.value)}/>
      <Button text="CADASTRAR"/>
      <Link to="/login" className="Hiperlink">
        Já tenho cadastro
      </Link>
    </form>
  );
}
export default Register;
