export const ErrorsMessage = (values) => {
  let errors = {};
  
  if (values.name.length < 3) {
    errors.name = 'Preencha seu nome';
  } 
  
  if (!values.email) {
    errors.email = 'Preencha seu email.';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Ops, email inválido.';
  }

  if (!values.password) {
    errors.password = 'Preencha sua senha'
  } else if (values.password.length < 6) {
    errors.password = 'Eita, senha curta. Pelo menos 5 caracteres.';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Por favor, verifique sua senha';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Oh, no! As senhas não coincidem';
  }

  if (!values.role) {
    errors.role = 'Colaboradore, selecione sua função';
  } 

  errors.ok = (!errors.name && !errors.email && !errors.password && !errors.confirmPassword && !errors.role);

  return errors;
}

export default ErrorsMessage;
