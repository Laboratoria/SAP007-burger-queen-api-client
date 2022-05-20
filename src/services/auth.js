import {request} from "./client.js";

export function createUser(name, email, password, role){
    const body = {
        "name": name,
        "email": email,
        "password": password,
        "role": role,
        "restaurant": "Tá chovendo hambúrguer"
      }
    return request("/users", "POST", body);
}

export function userLogin(email, password){
  const body = {
    "email": email,
    "password": password
  }
  return request("/auth", "POST", body)
}
