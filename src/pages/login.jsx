import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import button from "../../src/components/Button/button.module.css";
import Message from "../components/Message";
import { Link, useNavigate } from "react-router-dom";
import { logedIn } from "../services/api";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleOnClick(e) {
    e.preventDefault();
    console.log(email, password);
    logedIn(email, password)
      .then(({ data, message }) => {
        setError(message)
        setTimeout(() => {
          navigate(data.role === "hall" ? "/hall" : "/kitchen");
        }, 3000)
      })
      .catch((error) => {
        setError(error.message)
        setTimeout(() => {
          setError("")
        }, 3000)
      }
      )
  }
  return (
    <div className="DivForm">
      <Logo />
      <form onSubmit={handleOnClick}>
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
          pattern="[a-zA-Z0-9]{6,}"
          title="A senha deve conter no mínimo 6 caracteres entre números e letras"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button children="LOGAR" type="submit" className={button.btnLogin} />
        <Link to="/register" className="Hiperlink">
          Cadastre-se
        </Link>
        {error ? <Message msg={error} /> : null}
      </form>
    </div>
  );
}
export default Login;
