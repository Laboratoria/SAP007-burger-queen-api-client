import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import Button from "./components/Button";
import Footer from "./components/Footer"

function logedIn(){
    console.log('Logando usuário')
}
function Login() {
    return (
      <div className="App">
        <InputEmail/>
        <InputPassword />
        <Button onClick={logedIn} text="LOGAR"/>
        <a href='#register' className='Hiperlink'>Cadastre-se</a>
        <Footer/>
      </div>
    );
  }
  
  export default Login;
  