// import { URL, getToken } from './localStorage.js';

// export const createUser = (endpoint, items) => {
//   return fetch(`${URL}${endpoint}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       name: items.name,
//       email: items.email,
//       password: items.password,
//       role: items.role,
//       restaurant: 'Burger Queen'
//     }),
//   });
// };

// export const loginUser = (endpoint, items) => {
//   return fetch(`${URL}${endpoint}` , {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email: items.email,
//       password: items.password,
//     })
//   });
// };

// export const getProducts = (endpoint) => {
//   return fetch(`${URL}${endpoint}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': getToken()
//     },
//   })
//   .then(res => res.json())
// };

// export const sendOrder = (endpoint, orderInfo, items) => {
//   return fetch(`${URL}${endpoint}` , {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': getToken()
//     },
//     body: JSON.stringify({
//       client: orderInfo.client,
//       table: orderInfo.table,
//       products: items,  
//     })
//   })
// };

// export const getOrders = (endpoint) => {
//   return fetch(`${URL}${endpoint}` , {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': getToken()
//     },
//   }).then((res) => res.json())
// };

// export const updateOrderStatus = (endpoint, id, status) => {
//   id = id.toString();
//   return fetch(`${URL}${endpoint}${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': getToken(),
//     },
//     body: JSON.stringify({
//       status
//     })
//   }).then((res) => res.json())
// };

export const userLogin = async (userEmail, userPassword) => {
  const url = "https://lab-api-bq.herokuapp.com/auth";
  const responseLogin = await fetch(`${url}`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });
  return responseLogin;
  console.log(url)
};

