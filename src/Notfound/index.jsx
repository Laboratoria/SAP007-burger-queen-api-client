import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>{
  return (
    <div>
      <p>PÁGINA NÃO ENCONTRADA</p>
      <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
    </div>
  );
}

export default NotFound;