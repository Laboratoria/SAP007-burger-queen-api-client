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

  // A função handleSubmit() faz duas coisas:
  // 1. Registra o valor atual do elemento de entrada(input) sempre que o formulário for enviado;
  // 2. Impede o comportamento padrão do formulário HTML de navegar para uma nova página. 

  const handleSubmit = (e) => {
    e.preventDefault();

    (defineErrors(errorsMessages(values)));

    signIn(values.email, values.password).then((response) => {
      if (response.code === 400) {
        defineShowModalErrors(true);
      } else {
        localStorage.setItem('token', response.token);
        localStorage.setItem('id', response.id);

        if (response.role === "hall") {
          history.push('/hall')
        }
        else if (response.role === "kitchen") {
          history.push('/kitchen')
        }
      }
    }).catch((error) => {
      console.log(error)
    })
  };