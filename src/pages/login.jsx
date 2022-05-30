import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { logedIn } from "../services/api";
import Message from "../components/Message";
import { codeError } from '../services/error';
import { setToken } from "../services/token";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  let message = " ";
  if (location.state) {
    message = location.state.message;
  };

  function handleOnClick(e) {
    e.preventDefault();
    logedIn(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setError(codeError(response));
      })
      .then((data) => {
        setToken(data.token);
          navigate(data.role === "hall" ? "/hall" : "/kitchen");       
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="DivForm">
        <Logo />
    <form>
      <Input
        type="email"
        value={email}
        placeholder="E-MAIL"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="SENHA"
        minlength="6"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button children="LOGAR" type="button" onClick={handleOnClick}/>
      <Link to="/register" className="Hiperlink">
        Cadastre-se
      </Link>
      {message && <Message type="error" msg={message} />}
      {error && <Message type="error" msg={error} />}
    </form>
    </div>
  );
}

export default Login;
