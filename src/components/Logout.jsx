import { useNavigate } from 'react-router-dom';
import Button from './Button';
    
    export const Logout = () => {
        let historyLogOut = useNavigate();

        const logOut = () => {
            localStorage.clear();
            return historyLogOut('/');
        };
    
    return(
        <Button clickFunction={logOut} children='Sair'/>
    )
};