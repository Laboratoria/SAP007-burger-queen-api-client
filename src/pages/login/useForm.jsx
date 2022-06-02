import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginWithEmailPassword } from "../../services/api-auth";

const useForm = (validation) => {
  localStorage.clear();
  const [messageError, setMessageError] = useState("");

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
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

  const navigate = useNavigate();

  const routerHall = () => {
    navigate("/hall");
  };
  const routerKitchen = () => {
    navigate("/kitchen");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validations = validation(values);
    setErrors(validations);

    if (validations.ok) {
      LoginWithEmailPassword(values.email, values.password)
        .then((response) => {
          if (
            response.code &&
            (response.code === 400 || response.code === 403)
          ) {
            alert(response.message);
          } else {
            localStorage.setItem("role", response.role)
            localStorage.setItem("token", response.token);
            localStorage.setItem("id", response.id);

            if (response.role === "atendente") {
              routerHall();
            } else if (response.role === "cozinheiro") {
              routerKitchen();
            } else {
              alert("Hmm, função desconhecida " + response.role);
            }
          }
        })
        .catch((error) => {
          setMessageError("Ops, algo deu errado. [" + error.message + "]");
          console.log(messageError);
        });
    }
  };

  return { handleChange, handleSubmit, errors };
};

export default useForm;
