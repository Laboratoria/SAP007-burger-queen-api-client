import { Navigate } from 'react-router-dom';

export const PrivatePages = ({ children, redirectTo }) => {
    const isAuthorized = localStorage.getItem('token') !== null;
    return isAuthorized ? children : <Navigate to={redirectTo} />;
};