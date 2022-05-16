export const errorsMessages = (values) => {

  let errors = {};

  if (!values.email) {
    errors.email = "Email obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Hmmm, email inválido";
  }

  if (!values.password) {
    errors.password = "Senha obrigatória.";
  } else if (values.password.length < 6) {
    errors.password = "Ops! Senha curta.";
  }
  return errors;
}

export default errorsMessages;
