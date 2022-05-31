import React, {useState} from 'react';
import logo from '../img/logo.png';
import Button from '../componentes/button';
import Form from '../componentes/form';
import Input from '../componentes/input'
import '../pages-css/login.css';
import Footer from '../componentes/footer';


function App() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  return (
  <>
      <header>
        <img className='logo-img' src={logo} /> 
      </header>
      <Form>
        <label className="label">Email</label>
          <Input  className="inputs"
          type="email"
          placeholder="user@user.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required/> 
        <label className="label">Senha</label>
          <Input className="inputs"
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required/> 
        <Button className='button blue'>Entrar</Button>
        <Button className='button green'>Cadastrar</Button>
      </Form>
    <Footer/>
  </>
  );
}

export default App;


{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
> */}