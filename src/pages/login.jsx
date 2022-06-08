import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { logedIn } from "../services/api";
import Message from "../components/Message";
import { FeedbackError } from "../services/CodeError";
import { setToken } from "../services/token";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [message, setMenssage] = useState(false)
  const navigate = useNavigate();
  // console.log(message)

  function handleOnClick(e) {
    e.preventDefault();
    logedIn(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        else{
          setError(FeedbackError(response))
        }
      })
      .then((data) => {
        if (data) {
          setTimeout(() => {
            setToken(data.token);
            navigate(data.role === "hall" ? "/hall" : "/kitchen");
          }, 3000);
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="DivForm">
      <Logo />
      <form>
        <Input
          type="email"
          value={email}
          placeholder="E-MAIL"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Siga este formato exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="SENHA"
          pattern="[a-zA-Z0-9]{6}"
          title="A senha deve conter no mínimo 6 caracteres entre números e letras"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button children="LOGAR" type="button" onClick={handleOnClick} />
        <Link to="/register" className="Hiperlink">
          Cadastre-se
        </Link>
        {error ? <Message msg={FeedbackError(error)} /> : null}
      </form>
    </div>
  );
}
export default Login;
