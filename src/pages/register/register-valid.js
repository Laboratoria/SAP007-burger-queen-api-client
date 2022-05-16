export const errorsMessages = (values) => {

  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Preencha o seu nome';
  }
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ops... Email inválido. Tente novamente';
  }
  if (!values.password) {
    errors.password = 'Preencha sua senha';
  } else if (values.password.length < 6) {
    errors.password = 'A senha deve conter no mínimo 6 caracteres';
  }
  if (!values.role) {
    errors.role = 'Selecione sua função!';
  }
  return errors;
}

export default errorsMessages;
