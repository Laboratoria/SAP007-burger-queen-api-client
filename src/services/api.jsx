import { getToken, setToken } from "./token";
import { errorMessage } from './feedback';

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
    }),
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
    }),
  })
  .then((response)=>{
    if(response.status !== 200){
      const message = errorMessage(response);
      throw new Error (message)
    }
    return response.json()
  })
  .then((data)=>{
    setToken(data.token);
    return data;
  })
};

export const getProduct = () => {
  return fetch(`${URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken("token"),
    },
  });
};

export const createOrder = (info) => {
  return fetch(`${URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify(info),
  });
};

export const allOrders = () => {
  return fetch(`${URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  });
};
