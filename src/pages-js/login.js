import React, {useState} from 'react';
import logo from '../img/logo.png';
import Button from '../componentes/button';
import Form from '../componentes/form';
import Input from '../componentes/input'


function App() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");

  return (
    <section>
      <header>
        <img className='logo-img' src={logo} /> 
        <Form>
        <label>Email</label>
                <Input 
                type="email"
                placeholder="user@user.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required/>
            <label>Senha</label>
                <Input
                type="password"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required/> 
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