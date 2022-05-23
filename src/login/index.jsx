import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from'../img/logo_bq.png';
import './login.css';
import '../Style.css';
import Input from '../Components/input';
import Button from '../Components/button';
import Footer from '../Components/footer';

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
    //Dados de login: email: bq@admin.com /senha: bq123456 /role: admin
    //Dados de login: email: aisha@bms2.com /senha: bq123456 /role: chef
    try {
      const resultApi = await fetch('https://lab-api-bq.herokuapp.com/auth', {
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
      const content = await resultApi.json();
      setLoading(false);

      if (resultApi.status !== 200) {
        setError(content.message);
      } else {
        if (content.role === 'waiter'){
          navigate('/waiter');
        } else if (content.role === 'chef'){
          navigate('/chef');
        } else if (content.role === 'admin'){
          navigate('/admin');
        } else {
          navigate('/not-found');
        }
      }
      localStorage.setItem('Token', content.token);
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