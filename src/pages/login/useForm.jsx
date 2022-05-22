import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const useForm = (validation) => {
  localStorage.clear();
  const [messageError, setMessageError] = useState('');

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    const updatedValue = {
      ...values,
      [name]: value,
    }
    setValues(updatedValue);

    const validations = validation(updatedValue)
    setErrors(validations);
    
  };

  const navigate = useNavigate()

  const routerHall = () => {
    navigate('/hall')
  }
  const routerKitchen = () => {
    navigate('/kitchen')
  }


  