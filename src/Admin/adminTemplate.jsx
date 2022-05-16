import React from 'react';
import { Link } from 'react-router-dom';
import './adminTemplate.css';
import logo from'../img/logo_bq.png';

const AdminTemplate = ({ children }) =>{
  return (
    <div className="conteudo-admin">  
        <nav className="menu-admin">
          <p>SISTEMA ADMINISTRATIVO</p>
          <ul>
          <li>
          <Link to="/admin">Início</Link>
          </li>
          <li>
          <Link to="/list-users">Lista de Usuários</Link>
          </li>
          <li>
          <Link to="/create-user">Criar Usuário</Link>
          </li>
          <li>
          <Link to="/update-user">Atualizar Usuário</Link>
          </li>
          <li>
          <Link to="/delete-user">Deletar Usuário</Link>
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

export default AdminTemplate;