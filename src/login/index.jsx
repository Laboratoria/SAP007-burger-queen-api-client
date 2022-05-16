import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from'../img/logo_bq.png';
import './login.css';
import '../Style.css'
import Input from './input';
import Button from './button';
import Footer from './footer';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    const email = e.target.email.value;
    const password = e.target.password.value;

    //Dados de login: email: engamandagusmao@gmail.com /senha: bq123456 /role: waiter
    try {
      const resultadoApi = await fetch('https://lab-api-bq.herokuapp.com/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const conteudo = await resultadoApi.json();
      setLoading(false);

      if (resultadoApi.status !== 200) {
        setError(conteudo.message);
      } else {
        if (conteudo.role === 'waiter'){
          navigate('/waiter');
        } else if (conteudo.role === 'chef'){
          navigate('/chef');
        } else if (conteudo.role === 'admin'){
          navigate('/admin');;
        } else {
          navigate('/not-found');;
        }
      }
      
      console.log(conteudo);
    } catch (e) {
      setLoading(false);
      setError('Erro desconhecido');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SERVICE SYSTEM
        </p>

        {Boolean(loading) && (
          <i className="ph-spinner">Carregando</i>
        )}

        {Boolean(error) && (
          <h1 className="msgError">{error}</h1>
        )}

        <form className="formLogin" onSubmit={onLogin}>
          <div className="infoLogin">
            <h1>E-mail</h1>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              name="email"
              icon={<i className="ph-envelope"></i>}
            />
          </div>
          <div className="infoLogin">
            <h1>Senha</h1>
            <Input
              type="password"
              placeholder="Digite sua senha"
              name="password"
              icon={<i className="ph-lock-key"></i>}
            />
          </div>
          <Button title="ENTRAR" />
        </form>
      </header>
      <Footer />
    </div>
  );
}

export default Login;
