import Input from "../components/Input";
import Button from "../components/Button";
import Logo from "../components/Logo";
import { createUser } from "../services/api";
import Message from "../components/Message";
import { codeError } from "../services/error";
import { setToken } from "../services/token";
import Role from "../components/Role";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

 
  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, email, password, role)
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
  }
  return (
    <div className="DivForm">
      <Logo />
      <form onSubmit={handleSubmit}>
        <div className="DivRole">
          <Role
            type="radio"
            value="kitchen"
            name="role"
            id="kitchen"
            label="COZINHA"
            data-testid="Cozinha"
            onChange={(e) => setRole(e.target.value)}
          />
          <Role
            type="radio"
            value="hall"
            name="role"
            id="hall"
            label="SALÃO"
            required
            data-testid="Salão"
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <Input
          type="name"
          placeholder="NOME"
          value={name}
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="E-MAIL"
          value={email}
          id="email"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          title="Siga este formato exemplo@exemplo.com"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="SENHA"
          value={password}
          id="password"
          name="password"
          pattern="[a-zA-Z0-9._%+-@#!*$?/&]{6,}$"
          title="A senha deve conter no mínimo 6 caracteres"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button children="CADASTRAR" />
        <Link to="/login" className="Hiperlink">
          Já tenho cadastro
        </Link>
        {error && <Message msg={error} />}
      </form>
    </div>
  );
}
export default Register;