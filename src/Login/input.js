import React from 'react';
import './input.css';

const Input = ({ type, placeholder }) => (
  <input
    className="inputLogin"
    type={type}
    placeholder={placeholder}
  />
);

export default Input;