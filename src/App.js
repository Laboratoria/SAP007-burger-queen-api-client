import InputEmail from "./components/InputEmail";
import InputPassword from "./components/InputPassword";
import Button from "./components/Button";
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
      <InputEmail/>
      <InputPassword />
      <Button />
      <a href='#register' className='Hiperlink'>Cadastre-se</a>
      <Footer/>
    </div>
  );
}

export default App;
