import React from 'react';
//import logo from './componentes/img/logo.png';
//import App.css from './src/App.css';
import Button from '../componentes/button';

function App() {
  return (
    <section>
      <header>
        {/* <img className='logo-img' src={logo} /> */}
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <Button nome= "camila">camila</Button>
        <Button nome= "raynara">raynara</Button>
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