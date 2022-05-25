<<<<<<< HEAD
import {getToken} from "./token"
=======
import {getToken} from "../services/token"
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
const URL = "https://lab-api-bq.herokuapp.com";

export const createUser = (name, email, password, role) => {
  return fetch(`${URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "hora de burger",
    })
  });
};

export const logedIn = (email, password) => {
  return fetch(`${URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      password: password,
    })
  });
};
<<<<<<< HEAD

=======
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
export const getProduct = () => {
  return fetch(`${URL}/products`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getToken("token")
      }
  });
};
<<<<<<< HEAD

=======
>>>>>>> 9fe1a3fc14a7a82d5f884cd98027cb5c97a316eb
