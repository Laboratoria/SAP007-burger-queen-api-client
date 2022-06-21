export const createTokenAndRole = (token, role) => {
    localStorage.setItem('token', token);
    localStorage.setItem('role', role);
  }
  
  export const getToken = () => localStorage.getItem('token');
  export const getRole = () => localStorage.getItem('role');
  
  
  export const removeToken = () => localStorage.removeItem('token');
  export const removeRole = () => localStorage.removeItem('role');
