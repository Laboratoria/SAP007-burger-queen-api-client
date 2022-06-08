import Header from '../components/Header'
import Button from '../components/Button'
import Logo from '../images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { removeLogin } from '../services/token.js';



function HallKitchen() {
    const navigate = useNavigate();
    const logOut = (data) => {
        removeLogin(data.token, data.role);
        navigate('/');
    };

    return (
        <>
            <Header children='Cozinha' img={Logo} alt={'Logo da Burger Heroes'}/>
            <h1>Parabéns você logou na cozinha!</h1>
            <Button customClass="button_logout" clickFunction={logOut} type='button' children="Sair" />
        </>
    )
}

export default HallKitchen;