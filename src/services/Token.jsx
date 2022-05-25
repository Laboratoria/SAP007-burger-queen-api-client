export const SetToken = ((token) => localStorage.setItem('token', token));
export const GetToken = (() => localStorage.getItem('token'));
export const RemoveToken = ((token) => localStorage.removeItem('token', token));