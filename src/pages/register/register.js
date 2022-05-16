import React from 'react';
import Button from '../../components/button/button.js';
import Input from '../../components/input/input.js';
import errorsMessages from '../register/register-valid';
import { register } from "../../services/api-auth.js";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import ModalErrors from "../../components/modal/modal-errors";

const Register = () => {
  localStorage.clear();

  const [values, defineValues] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [errors, defineErrors] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [showModalErrors, defineShowModalErrors] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    defineValues({
      ...values,
      [name]: value
    });
  };

  const history = useHistory();
  const handleLogin = () => history.push('/login')

  const handleSubmit = (e) => {
    e.preventDefault();

    (defineErrors(errorsMessages(values)));

    register(values.name, values.email, values.password, values.role)
      .then((response) => {
        if (response.code === 403) {
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
      })
      .catch((errors) => {
        console.log(errors)
      });
  }
  