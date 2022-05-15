import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../services/api-auth";


const Login = () => {
  localStorage.clear();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  //criar um modal para os erros de login 
  //criar funcao do registro e anexar erros

  const history = useHistory();

  const handleSignup = () => {
    history.push("/signup");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };


  return (
    <>
      <div className="main-container-login">
        <div className="cont-welcome">
          <img src={logo} alt="logo" className="logo-login" />
          <h3>Seja bem vinda, colaboradora!</h3>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="cont-dos-inputs">
              <Input
                name="email"
                type="email"
                placeholder="Email:"
                className="input-field"
                onChange={handleChange}
              />
              <p className="msg-error"></p>

              <Input
                name="password"
                type="password"
                placeholder="Senha: "
                className="input-field"
                onChange={handleChange}
              />
              <p className="msg-error"></p>
            </div>
            <div className="cont-btn">
              <Button className="button" type="submit" text="Login" />
            </div>
          </form>

          <h3>Ainda não possui uma conta?</h3>
          <Button
            className="button"
            onClick={handleSignup}
            text="Registre-se"
          />
        </div>
      </div>
    </>
  );
};

export default Login;

// 'react-router-dom' - instalado com o cmd -> npm i react-router-dom
