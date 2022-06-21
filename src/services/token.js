export const login = (token, role) => {
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
}

export const removeLogin = (token, role) => {
    localStorage.removeItem('token', token)
    localStorage.removeItem('role', role)
}

export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem("role");
