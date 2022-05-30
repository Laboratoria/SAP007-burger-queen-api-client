const baseURL = "https://lab-api-bq.herokuapp.com";
const headers = { "Content-Type": "application/json" };

export const createUser = async (name, email, password, role) => {
  return await fetch(`${baseURL}/users`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Laricas Burguer",
    }),
  }).then((res) => res.json());
};

export const LoginWithEmailPassword = async (email, password) => {
  return await fetch(`${baseURL}/auth`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res) => res.json());
};
