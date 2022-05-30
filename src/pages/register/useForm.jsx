import { useState } from "react";
import { createUser } from "../../services/api-auth";

const UseForm = (validation) => {
  localStorage.clear();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = {
      ...values,
      [name]: value,
    };
    setValues(updatedValue);

    const validations = validation(updatedValue);
    setErrors(validations);
  };

  const handleSubmit = (callback) => {
    const validations = validation(values);
    setErrors(validations);

    if (validations.ok) {
      createUser(values.name, values.email, values.password, values.role)
        .then((response) => {
          if (
            response.code &&
            (response.code === 400 || response.code === 403)
          ) {
            alert(response.message);
          } else {
            callback();
          }
        })
        .catch((error) => {
          console.log("Erro na requisição. [" + error.message + "]");
        });
    }
  };

  return { handleChange, handleSubmit, errors };
};

export default UseForm;
