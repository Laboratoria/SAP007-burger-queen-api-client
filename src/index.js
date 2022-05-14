import React from 'react';
import ReactDom from 'react-dom/client'
import './Style.css'
import Routes from './routes';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);