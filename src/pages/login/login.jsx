import React from 'react';
import { useNavigate } from 'react-router-dom';

// useNavigate uses:
// 1. Go to the previous or next pages
// 2. Redirect user to a specific Url

// template TESTE 
// refazer essa template string, importando o input e button dos componentes react

const Login = () => {
  const history = useNavigate();

  return (
    <div className='main'>
      <form className='login-page'>
        <h2 className='form-title'>Colaborador, faça seu login:</h2>
        <label className='form-labels'>Email</label>
        <input className='form-input' type='email' name='email' autoComplete='off'/>
        <label className='form-labels'>Senha</label>
        <input className='form-input' type='password' name='password' />
        <button className='form-button' type='submit'>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='form-button' onClick={() => { history('/signup') }}>Cadastre-se</button>
      </form>
    </div>
  );  
};

export default Login;

// 'react-router-dom' - instalado com o cmd -> npm i react-router-dom