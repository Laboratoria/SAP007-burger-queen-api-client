export const setTokenAndRole = (role, token) => {
    localStorage.setItem("role", role)
    localStorage.setItem("token", token)    
  }