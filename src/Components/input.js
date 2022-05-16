import React from 'react';
import './input.css';

const Input = ({ type, placeholder, name, icon }) => (
  <div className="inputLoginContainer">
    <div className="inputLoginIcon">
      {icon}
    </div>

    <input
      className="inputLogin"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  </div>
);

export default Input;