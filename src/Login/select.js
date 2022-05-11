import React from 'react';
import './select.css';

const Select = ({ onChange }) => (
  <select
    className="selectLogin"
    onChange={onChange}
  >
    <option value="">Selecione o serviço</option>
    <option value="role">Atendimento</option>
    <option value="restaurant">Cozinha</option>
  </select>
);

export default Select;