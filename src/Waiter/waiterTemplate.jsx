import React from 'react';
import { Link } from 'react-router-dom';
import './waiterTemplate.css';
import logo from'../img/logo_bq.png';

const WaiterTemplate = ({ children }) =>{
  return (
    <div className="conteudo-admin">  
        <nav className="menu-admin">
          <p>ATENDIMENTO</p>
          <ul>
          <li>
          <Link to="/waiter">Início</Link>
          </li>
          <li>
          <Link to="/menu">Cardápio</Link>
          </li>
          <li>
          <Link to="/order">Pedidos</Link>
          </li>
          <li>
          <Link to="/" className="ph-sign-out">Sair</Link>
          </li>
          </ul>
        </nav>

        <div className="interno-admin">
          <img src={logo} className="App-logo" alt="logo" />

          {children}
        </div>
    </div>
  );
}

export default WaiterTemplate;