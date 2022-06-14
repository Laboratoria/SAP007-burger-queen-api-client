import { getToken } from './localStorage.js';

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
};



export const userRegister = async (userName, userEmail, userPassword, userRole,) =>{
  const url = "https://lab-api-bq.herokuapp.com/users";
  const responseRegister = await fetch (`${url}`,{
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
      role: userRole,
      restaurante:"Burger Queen"
    })
  })
  return responseRegister
}