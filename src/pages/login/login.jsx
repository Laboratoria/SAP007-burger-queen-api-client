import React from "react";
import { useState } from "react";
import { signIn } from "../../services/api-auth";
import { useHistory } from 'react-router-dom';
import '../../../src/style.css';
import errorsMessages from "./login-validation";
import ModalErrors from "../../components/modal/modal-errors";

const Login = () => {
  localStorage.clear();

  const [values, defineValues] = useState({
    email: '',
    password: '',
  });

  const [errors, defineErrors] = useState({
    email: '',
    password: '',
  });

  const [showModalErrors, defineShowModalErrors] = useState(false);

  const history = useHistory();

  const handleRegister = () => {
    history.push('/signup')
  }

  //Como o handleChange é executado a cada tecla pressionada para atualizar o estado do React, 
  //o valor exibido será atualizado conforme o usuário digita.
  const handleChange = (e) => {
    const { name, value } = e.target;
    defineValues({
      ...values,
      [name]: value,
    });
  };