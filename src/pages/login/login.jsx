import React from "react";
import { useState } from "react";
import { signIn } from "../../services/api-auth";
import { useHistory } from 'react-router-dom';
import errorsMessages from "./login-validation";
import ModalErrors from "../../components/modal/modal-errors";

const Login = () => {
  localStorage.clear();

  const [values, defineValues] = useState({
    email: '',
    password: '',
  });

  const [errors, defineErrors] = useState({
    email: '',
    password: '',
  });

  const [showModalErrors, defineShowModalErrors] = useState(false);

  const history = useHistory();

  const handleRegister = () => {
    history.push('/signup')
  }

  //Como o handleChange é executado a cada tecla pressionada para atualizar o estado do React, 
  //o valor exibido será atualizado conforme o usuário digita.
  const handleChange = (e) => {
    const { name, value } = e.target;
    defineValues({
      ...values,
      [name]: value,
    });
  };

  // A função handleSubmit() faz duas coisas:
  // 1. Registra o valor atual do elemento de entrada(input) sempre que o formulário for enviado;
  // 2. Impede o comportamento padrão do formulário HTML de navegar para uma nova página. 

  const handleSubmit = (e) => {
    e.preventDefault();

    (defineErrors(errorsMessages(values)));

    signIn(values.email, values.password).then((response) => {
      if (response.code === 400) {
        defineShowModalErrors(true);
      } else {
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.id);

        if (response.role === "hall") {
          history.push('/hall')
        }
        else if (response.role === "kitchen") {
          history.push('/kitchen')
        }
      }
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <>
      <div className='content display-flexbox'>
        <div className='cont-login-register display-flexbox'>
          <img src={logo} alt='logo' className='logo-login' />
          <h3>Seja bem vinda, colaboradora!</h3>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className='display-flexbox'>
              <Input name='email' type='email' placeholder='Email:'
                className='input-field' onChange={handleChange} />
              <p className="error-msg">{errors.email}</p>

              <Input name='password' type='password' placeholder='Senha: '
                className='input-field' onChange={handleChange} />
              <p className="error-msg">{errors.password}</p>
            </div>
            <div className='display-flexbox'>
              <Button className='button' type='submit' text='Login' />
            </div>
          </form>

          {showModalErrors ? (
            <ModalErrors onClose={() => defineShowModalErrors(false)}>
              <h3>Vish, email e/ou senha inválidos</h3>
            </ModalErrors>) : null}

          <h3>Não possui uma conta?</h3>
          <Button className='button' onClick={handleRegister} text='Registre-se' />
        </div>
        
      </div>
    </>
  );
};

export default Login;
