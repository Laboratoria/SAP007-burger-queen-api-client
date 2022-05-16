import React from 'react';
import Button from '../../components/button/button.js';
import Input from '../../components/input/input.js';
import errorsMessages from '../signup/register-valid';
import { register } from "../../services/api-auth.js";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ModalErrors from "../../components/modal/modal-errors";

const Register = () => {
  localStorage.clear();

  const [values, defineValues] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [errors, defineErrors] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [showModalErrors, defineShowModalErrors] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    defineValues({
      ...values,
      [name]: value
    });
  };

  const history = useHistory();
  const handleLogin = () => history.push('/login')

  const handleSubmit = (e) => {
    e.preventDefault();

    (defineErrors(errorsMessages(values)));

    register(values.name, values.email, values.password, values.role)
      .then((response) => {
        if (response.code === 403) {
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
      })
      .catch((errors) => {
        console.log(errors)
      });
  }
  return (
    <>
      <div className='content display-flexbox'>
        <div className='cont-login-register display-flexbox'>
          <img src={logo} alt='logo' className='logo-login' />
          <h1>Registro</h1>

          <form onSubmit={handleSubmit}>
            <div className='display-flexbox'>
              <Input name='name' type='text' placeholder='Nome:' className='input-field'
                onChange={handleChange} />
              <p className="error-msg">{errors.name}</p>

              <Input name='email' type='email' placeholder='Email:' className='input-field'
                onChange={handleChange} />
              <p className="error-msg">{errors.email}</p>

              <Input name='password' type='password' placeholder='Senha: ' className='input-field'
                onChange={handleChange} />
              <p className="error-msg">{errors.password}</p>

              <div>
                <h3 className="h3-function">Escolha sua função:</h3>
                <label htmlFor="hall">Salão</label>
                <input type="radio" name="role" id="hall" text="Salão" value="hall" onChange={handleChange} />
                <label htmlFor="kitchen">Cozinha</label>
                <input type="radio" name="role" id="kitchen" text="Cozinha" value="kitchen" onChange={handleChange} />
                <p className="error-msg">{errors.role}</p>
              </div>

            </div>
            <div className='display-flexbox'>
              <Button className='button' type='submit' text='Cadastrar' />
            </div>
          </form>

          <Button className='button' onClick={handleLogin} text='Voltar' />

          {showModalErrors ? (
            <ModalErrors onClose={() => defineShowModalErrors(false)}>
              <h3>Eita... Email já cadastrado.</h3>
            </ModalErrors>) : null}
        </div>
       
      </div>
    </>
  )
}

export default Register;
