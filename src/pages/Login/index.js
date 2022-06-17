import Input from "../../components/Inputs";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Error from "../../components/errors";
import { useState } from "react";
import { userLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { setToken, setName, setRole } from "../../services/storage"
import "./styles.css";

function Login() {
  const navigate = useNavigate();
  function loginUser(e) {
    e.preventDefault();
    if (email && password) {
      userLogin(email, password).then((user) => {
        if (user.token) {
          setToken(user.token);
          setName(user.name);
          setRole(user.role);
          navigate("/panel", { message: "redirecionado" })
          return user;
        } else if (user.code) {
          setError(user.message);
          hideMessage();
        }
      })
    } else {
      setError("Preencha os campos corretamente");
      hideMessage();
    }

    function hideMessage() {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  return (
    <>
      <Header />
      <section className="container-login">
        <aside className="container-banner">
          <Banner />
        </aside>
        <form className="login" onSubmit={loginUser}>
          <h1 className="login-indicator">Login</h1>
          <Input
            className="email"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="password"
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Error text={error} className="error-login" />
          <Button className="button-login" type="submit" children="Entrar" />
          <a className="register-link" href="/register">
            {" "}
            Ou cadastre-se aqui
          </a>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Login;
