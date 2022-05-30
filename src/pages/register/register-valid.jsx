export const ErrorsMessage = (values) => {
  let errors = {};

  if (values.name.length < 3) {
    errors.name = "Digite seu nome";
  }

  if (!values.email) {
    errors.email = "Digite seu email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Opa, email inválido ";
  }

  if (!values.password) {
    errors.password = "Digite uma senha";
  } else if (values.password.length < 6) {
    errors.password = "Opa, a senha deve ser maior que 5 caracteres";
  }

  if (!values.role) {
    errors.role = "Selecione sua função";
  }

  errors.ok =
    !errors.name &&
    !errors.email &&
    !errors.password &&
    !errors.confirmPassword &&
    !errors.role;

  return errors;
};

export default ErrorsMessage;
