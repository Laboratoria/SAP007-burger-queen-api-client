import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { logedIn } from "../services/api";
import Message from "../components/Message";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleOnClick(e) {
    e.preventDefault();
    logedIn(email, password)
      .then((data) => {
        navigate(data.role === "hall" ? "/hall" : "/kitchen");
      })
      .catch((error) => setError(error.message)
  )}
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
        {error ? <Message msg={error} /> : null}
      </form>
    </div>
  );
}
export default Login;
