import  Button  from '../components/Button'
import { useNavigate } from 'react-router-dom'

function Hall() {
    const navigate = useNavigate();
    
    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <p>Hall</p>
            <Button children="sair" onClick={handleLogout} />
        </div>
    )
}


export default Hall