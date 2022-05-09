import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const history = useNavigate();

  return (
    <div className='main'>
      <section className='signup-page'>
        <h1 className='form-title'>Cadastre-se</h1>
        <label className='form-labels'>Seu nome</label>
        <input className='form-input' type='text' placeholder='Nome' name='name' autoComplete='off'/>
        <label className='form-labels'>Cargo</label>
        <select className='form-select' autoComplete='off' name='role'>
          <option value=''>Selecione um cargo</option>
          <option value='attendant'>Atendente</option>
          <option value='chef'>Chef de Cozinha</option>
        </select>
        <label className='form-labels'>Email</label>
        <input className='form-input' type='email' placeholder='username@example.com' name='email' autoComplete='off' />
        <label className='form-labels'>Senha</label>
        <input className='form-input' type='password' placeholder='Senha' name='password' />
        <label className='form-labels'>Confirme sua senha</label>
        <input className='form-input' type='password' placeholder='Confirme sua senha' name='confirmPassword' />
        <span className='errors-message'>
        </span>
        <button className='form-button draw' type='submit' onClick={() => { history('/login') }}>Cadastrar</button>  
      </section>
    </div>
  );
};

export default SignUp;