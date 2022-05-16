export const errorsMessages = (values) => {

  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Preencha o seu nome';
  }
  if (!values.email) {
    errors.email = 'Preencha seu email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ops... Email inválido. Tente novamente';
  