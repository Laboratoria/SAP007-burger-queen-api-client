import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from './img/logo.jpeg'
import App from "./App";
import styles from "./components/Logo.module.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className={styles.Logo}>
    <img src={logo} alt="logo"  className={styles.LogoImg}></img>
    </div>
    <App />
  </React.StrictMode>
);


