export const registerUser = (name, email, password, role) => {
  return fetch("https://lab-api-bq.herokuapp.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body:JSON.stringify({
      name: name,
      email: email,
      password:password,
      role:role,
      restaurant:"Queens Burger",
    })
  }); 
};