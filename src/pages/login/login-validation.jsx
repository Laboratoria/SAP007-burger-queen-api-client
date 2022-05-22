export const errosMessages = (values) => {
  let errors = {};
  
  if (!values.email) {
    errors.email = 'Preencha seu email.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ops, email inválido.';
  }

  if (!values.password) {
    errors.password = 'Preencha sua senha'
  } else if (values.password.length < 6) {
    errors.password = 'Vish, senha curta.';
  }

  errors.ok = (!errors.email && !errors.password);

  return errors;
}

export default errosMessages;
