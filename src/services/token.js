export const login = (token, role) => {
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
}
export const getToken = () => localStorage.getItem('token');
export const removeToken = (token) => localStorage.removeItem('token', token);