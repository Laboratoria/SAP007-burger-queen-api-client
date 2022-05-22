import useForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./ValidationForm";
import { Link } from "react-router-dom";
import {
  LinkStyle,
  DefaultParagraph,
} from "../../components/style-html-elements/elements-style";
import { LoginRegisterParagraph } from "../../components/style-html-elements/elements-style";
import Header from "../../components/header/Header";

const LoginUser = () => {
  const { handleChange, handleSubmit, errors } = useForm(ErrorsMessage);

  return (
    <>
    <Header />
      <section>
        <form
          className="container container-login"
          action=""
          onSubmit={handleSubmit}
        >
          <Input
            label="Email:"
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Digite seu email"
          />
          <LoginRegisterParagraph>
            {errors.email && errors.email}
          </LoginRegisterParagraph>

          <Input
            label="Senha:"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Digite sua senha"
          />
          <LoginRegisterParagraph>
            {errors.password && errors.password}
          </LoginRegisterParagraph>

          <Button>Entrar</Button>
          <DefaultParagraph>Ainda não tem uma conta?</DefaultParagraph>
          <Link to="/register">
            <LinkStyle>Registre-se aqui</LinkStyle>
          </Link>
        </form>
      </section>
    </>
  );
};

export default LoginUser;
