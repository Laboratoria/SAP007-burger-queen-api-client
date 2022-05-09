import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();

  return (
    <div className='main'>
      <form className='login-page'>
        <h2 className='form-title'>Login</h2>
        <label className='form-labels'>Email</label>
        <input className='form-input' type='email' name='email' autoComplete='off'/>
        <label className='form-labels'>Senha</label>
        <input className='form-input' type='password' name='password' />
        <button className='form-button draw' type='submit'>Logar</button>
        <p className='new-user'>Não possui cadastro?</p>
        <button className='form-button draw' onClick={() => { history('/signup') }}>Cadastre-se</button>
      </form>
    </div>
  );  
};

export default Login;