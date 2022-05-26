import React from 'react';
import logo from '../componentes/img/logo.png';
//import App.css from './src/App.css';
import Button from '../componentes/button';
import Form from '../componentes/form.js';

function App() {
  return (
    <section>
      <header>
        <img className='logo-img' src={logo} /> 
        <Form>
        <label>Email</label>
                <input type="text"/>
            <label>Senha</label>
                <input type="password"/>
                <Button cor="azul" className='button-form'>entrar</Button>
                <Button  cor="vermelho"className='button-form'>cadastrar</Button>
        </Form>
      </header>
    </section>
  );
}

export default App;


{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
> */}