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

  