import Input from "../../components/Inputs";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Error from "../../components/errors";
import { useState } from "react";
import { userLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import "./styles.modules.css";

function Login() {
  const navigate = useNavigate();
  function loginUser(e) {
    e.preventDefault();
    userLogin(email, password).then((user) => {
      console.log(user);
      if (user.token) {
        localStorage.setItem("name", user.name);
        localStorage.setItem("token", user.token);
        localStorage.setItem("role", user.role);
        navigate("/panel", { message: "redirecionado" })
        return user;
      } else if (user.code) {
        setError(user.message);
        hideMessage();
      }
    });
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
          <Banner/>
        </aside>
        <form className="login" onSubmit={loginUser}>
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
          <Button className="button-login" type="submit" nome="Entrar" />
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
