import { useNavigate } from 'react-router-dom'
    
    export const Logout = () => {
        let historyLogOut = useNavigate();

        const logOut = () => {
            localStorage.clear();
            return historyLogOut('/');
        };
    
    return(
        <button onClick={logOut}>Sair</button>
    )
};