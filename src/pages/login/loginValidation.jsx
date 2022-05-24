export const ErrorsMessage = (values) => {
  let errors = {};
  
  if (!values.email) {
    errors.email = 'Eita, faltou o email.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ops, email inválido.';
  }

  if (!values.password) {
    errors.password = 'Ops, faltou a senha.'
  } else if (values.password.length < 6) {
    errors.password = 'Vish, senha curta.';
  }

  errors.ok = (!errors.email && !errors.password);

  return errors;
}

export default ErrorsMessage;