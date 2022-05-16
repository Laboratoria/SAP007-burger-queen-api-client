import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import Button from "../components/Button";
import Footer from "../components/Footer"
import {useState} from "react"
function createUser(e){
    e.preventDefault();
    console.log(`Criando Usuário com ${email} e ${password}`)
}
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

function Register() {
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
