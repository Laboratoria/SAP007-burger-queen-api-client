import React from 'react';
import { Link } from 'react-router-dom';
import './chefTemplate.css';
import logo from'../img/logo_bq.png';

const ChefTemplate = ({ children }) =>{
  return (
    <div className="conteudo-admin">  
        <nav className="menu-admin">
          <p>COZINHA</p>
          <ul>
          <li>
          <Link to="/chef">Início</Link>
          </li>
          <li>
          <Link to="/all-orders">Todos os Pedidos</Link>
          </li>
          <li>
          <Link to="/pending">Pendentes</Link>
          </li>
          <li>
          <Link to="/preparation">Em preparo</Link>
          </li>
          <li>
          <Link to="/done">Prontos para a entrega</Link>
          </li>
          <li>
          <Link to="/delivered">Entregue</Link>
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

export default ChefTemplate;