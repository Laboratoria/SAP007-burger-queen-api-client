import UseForm from "./UseForm";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import ErrorsMessage from "./register-valid";
import { useState } from "react";
import Modal from "../../components/modal/Modal";
import { Link } from "react-router-dom";
import { LoginRegisterParagraph } from "../../components/style-html-elements/elements-style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import StyleBackgroundImg from "../../components/img-background/style-bg-img";

const Register = () => {
  const { handleChange, handleSubmit, errors } = UseForm(ErrorsMessage);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setShowPassword2(!showPassword2);
  };

  const callModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <section>
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
          placeholder="Digite o seu nome completo"
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
          placeholder="Digite o seu email"
        />
        <LoginRegisterParagraph>
          {errors.email && errors.email}
        </LoginRegisterParagraph>

        <div>
          <Input
            label="Senha"
            id="password"
            name="password"
            type={showPassword ? "type" : "password"}
            onChange={handleChange}
            placeholder="Digite a sua senha"
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
        </div>

        <div>
          <Input
            label="Confirme sua senha:"
            id="confirmPassword"
            name="confirmPassword"
            type={showPassword2 ? "type" : "password"}
            onChange={handleChange}
            placeholder="Digite a sua senha novamente:"
          />
          <span className="login-eye">
            {showPassword2 ? (
              <FaEye data-eye="2" size={20} onClick={handleClick2} />
            ) : (
              <FaEyeSlash data-eye="2" size={20} onClick={handleClick2} />
            )}
          </span>
          <LoginRegisterParagraph>
            {errors.confirmPassword && errors.confirmPassword}
          </LoginRegisterParagraph>
        </div>

        <p>Selecione sua função:</p>
        <div>
          <div className="choose-role">
            <Radio
              className="option-role"
              text="Atendente"
              label="Atendente"
              id="role-hall"
              name="role"
              type="radio"
              onChange={handleChange}
              value="atendente"
            />
          </div>
          <div className="choose-role">
            <Radio
              className="option-role"
              text="Cozinheiro"
              label="Cozinheiro"
              id="role-kitchen"
              name="role"
              type="radio"
              onChange={handleChange}
              value="cozinheiro"
            />
          </div>
          <LoginRegisterParagraph>
            {" "}
            {errors.role && errors.role}
          </LoginRegisterParagraph>
        </div>

        <Button onClick={() => handleSubmit(callModal)}>Cadastre-se</Button>
      </form>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <p>Cadastro realizado com sucesso!</p>
        <div style={{ textAlign: "center" }}>
          <Link to="/login">
            <>Fazer Login</>
          </Link>
        </div>
      </Modal>
    </section>
  );
};

export default Register;
