import useForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./loginValidation";
import { Link } from "react-router-dom";
import StyleBackgroundImg from "../../components/img-background/style-bg-img";
import {
  LinkToRegisterStyle,
  ParagraphUniversal,
} from "../../components/style-html-elements/elements-style";
import { LoginRegisterParagraph } from "../../components/style-html-elements/elements-style";
import HeaderLogo from "../../components/header/HeaderLogo";
import HeaderWelcome from "../../components/header/headerWelcome";

const LoginUser = () => {
  const { handleChange, handleSubmit, errors } = useForm(ErrorsMessage);

  return (
    <>
      <HeaderLogo />
      <HeaderWelcome />

      <section>
        <StyleBackgroundImg />

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
            placeholder="username@email.com"
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
            placeholder="Deixe-me adivinhar: é batatinha?"
          />
          <LoginRegisterParagraph>
            {errors.password && errors.password}
          </LoginRegisterParagraph>

          <Button>Entrar</Button>
          <ParagraphUniversal>Ainda não tem uma conta?</ParagraphUniversal>
          <Link to="/register">
            <LinkToRegisterStyle>Registre-se aqui</LinkToRegisterStyle>
          </Link>
        </form>
      </section>
    </>
  );
};

export default LoginUser;
