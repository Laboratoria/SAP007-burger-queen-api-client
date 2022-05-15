import React from 'react';
import './select.css';

const Select = ({ onChange }) => (
  <select
    className="selectLogin"
    onChange={onChange}
  >
    <option value="">Selecione o cargo</option>
    <option value="role">Administração</option>
    <option value="restaurant">Cozinheiro</option>
    <option value="restaurant">Garçom</option>
  </select>
);

export default Select;