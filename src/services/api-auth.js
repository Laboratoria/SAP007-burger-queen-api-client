export const register = async (email, password) => {
  return await fetch('https://lab-api-bq.herokuapp.com/auth', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  }).then(res => res.json())
    .catch((error) => {
      console.log(error)
    })
};
