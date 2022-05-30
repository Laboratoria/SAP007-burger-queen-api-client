import UseForm from "./useForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./register-valid";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import StyleBackgroundImg from "../../components/img-background/style-bg-img";
import CheckboxRole from "../../components/circle-option/CheckboxRole";
import { LoginRegisterParagraph } from "../../components/style-html-elements/elements-style";
import { ModalOfMenuOptions } from "../../components/button/ButtonStyle";
import HeaderLogo from "../../components/header/HeaderLogo";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleChange, handleSubmit, errors } = UseForm(ErrorsMessage);
  const [showPassword, setShowPassword] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const handleLogin = () => navigate("/login");

  const callModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <section>
      <HeaderLogo />
      <StyleBackgroundImg />
      <form
        className="container container-register"
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          label="Nome"
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Seja bem vinda :)"
        />
        <LoginRegisterParagraph>
          {errors.name && errors.name}
        </LoginRegisterParagraph>

        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="username@email.com"
        />
        <LoginRegisterParagraph>
          {errors.email && errors.email}
        </LoginRegisterParagraph>

        <Input
          label="Senha"
          id="password"
          name="password"
          type={showPassword ? "type" : "password"}
          onChange={handleChange}
          placeholder="Pelo menos 6 caracteres"
        />
        <span className="login-eye">
          {showPassword ? (
            <FaEye size={20} onClick={handleClick} />
          ) : (
            <FaEyeSlash size={20} onClick={handleClick} />
          )}
        </span>
        <LoginRegisterParagraph>
          {" "}
          {errors.password && errors.password}
        </LoginRegisterParagraph>

        <p>Sua função:</p>
        <div>
          <div className="choose-role">
            <CheckboxRole
              className="option-role"
              text="Atendente"
              label="Atendente"
              id="role-hall"
              name="role"
              type="checkbox"
              onChange={handleChange}
              value="atendente"
            />
          </div>
          <div className="choose-role">
            <CheckboxRole
              className="option-role"
              text="Cozinheiro"
              label="Cozinheiro"
              id="role-kitchen"
              name="role"
              type="checkbox"
              onChange={handleChange}
              value="cozinheiro"
            />
          </div>
          <LoginRegisterParagraph>
            {" "}
            {errors.role && errors.role}
          </LoginRegisterParagraph>
        </div>

        <div className="buttons-register-return">
          <Button onClick={() => handleSubmit(callModal)}>Cadastre-se</Button>
          <Button className="button" onClick={handleLogin}>
            Voltar
          </Button>
        </div>
      </form>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Cadastro realizado com sucesso!</p>
        <div style={{ textAlign: "center" }}>
          <Link to="/login">
            <ModalOfMenuOptions>Fazer Login</ModalOfMenuOptions>
          </Link>
        </div>
      </Modal>
    </section>
  );
};

export default Register;
