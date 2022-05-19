import Input from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { createUser } from "../services/api";
//import { codeError } from "../services/error";
import { setToken } from "../services/token";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  //const [codeError, setError] = useState();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    createUser(name, email, password, role)
    .then((response)=>{
      if (response.status === 200){
        return response.json();
      }
    //  setError(response);
    })
    .then((data )=>{
      setToken(data.token);
      navigate (data.role === "role"? "/hall" : "/kitchen")

    })
    .catch((error) => console.log(error))
  }


  return (
    <form onSubmit={createUser}>
      <Logo />
      <Input
        type="name"
        placeholder="NOME"
        value={name}
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label className="label">COZINHA</label>
      <Input
        type="radio"
        value="kitchen"
        name="role"
        id="kitchen"
        onChange={(e) => setRole(e.target.name)}
      />
      <label className="label">SALÃO</label>
      <Input
        type="radio"
        value="hall"
        name="role"
        id="hall"
        onChange={(e) => setRole(e.target.name)}
      />
      <Input
        type="email"
        placeholder="E-MAIL"
        value={email}
        id="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="SENHA"
        value={password}
        id="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="CADASTRAR" onClick={handleSubmit}/>
      <Link to="/login" className="Hiperlink">
        Já tenho cadastro
      </Link>
    </form>
  );
}
export default Register;
