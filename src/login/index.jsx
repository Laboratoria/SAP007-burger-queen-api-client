import logo from'../img/logo_bq.png';
import './login.css';
import Select from './select';
import Input from './input';
import Button from './button';
import Footer from './footer';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SERVICE SYSTEM
        </p>
        <div>
          <Select />
        </div>
        <div className="infoLogin">
          <Input type="email" placeholder="Digite seu e-mail"/>
          <i class="ph-envelope"></i>
        </div>
        <div className="infoLogin">
          <Input type="password" placeholder="Digite sua senha"/>
          <i class="ph-lock-key"></i>
        </div>
        <Button title="ENTRAR" />
      </header>
      <Footer />
    </div>
  );
}

export default Login;
