import InputEmail from "../components/Input/InputEmail";
import InputPassword from "../components/Input/InputPassword";
import Button from "../components/Button";
import Footer from "../components/Footer/Footer";
import {useState} from "react";

function Register() {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState("");

  function createUser(e){
      e.preventDefault();
      console.log(`Criando Usuário com ${email} e ${password}`)
  }
  
  return (
    <form onSubmit={createUser}className="App">
      <InputEmail htmlFor="email" value="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
      <InputPassword htmlFor="password" value="password" id="password"onChange={(e) => setPassword(e.target.value)}/>
      <Button text="CADASTRAR"/>
      <a href="#login" className="Hiperlink">
        Já tenho cadastro
      </a>
      <Footer />
    </form>
  );
}
export default Register;
