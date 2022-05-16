import React from 'react';
import './button.css';

const Button = ({ title, onClick }) => (
    <button
      className="buttonLogin"
      onClick={onClick}
    >
      {title}
    </button>
  );
  
export default Button;