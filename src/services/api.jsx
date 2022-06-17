import { getToken, setToken } from "./token";
import { errorMessage, sucessMessage } from './feedback';

const URL = "https://lab-api-bq.herokuapp.com";

export const createUser = async (name, email, password, role) => {
  const response = await fetch(`${URL}/users`, {
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
  let message = "";
  if (response.status === 200) {
    message = sucessMessage(response);
    console.log(message)
  } else {
    throw new Error(errorMessage(response));
  }
  const data = await response.json();
  setToken(data.token);
  return { data, message };
};


export const logedIn = async (email, password) => {
  const response = await fetch(`${URL}/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  let message = "";
  if (response.status !== 200) {
    message = "E-mail ou senha incorretos";
    throw new Error(message);
  }
  const data = await response.json();
  setToken(data.token);
  return { data, message };
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
  })
};

export const allOrders = () => {
  return fetch(`${URL}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
  })
};

export const updateOrder = (orderId, status) => {
  console.log(orderId, status)
  return fetch(`${URL}/orders/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify({ status }),
  })
}
