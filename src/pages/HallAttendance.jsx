import Header from '../components/Header';
import Button from '../components/Button';
import Input from '../components/Input'
import Logo from '../images/Logo.png';
import { useNavigate } from 'react-router-dom';
import { getProducts, createOrder } from '../services/auth';
import { useState, useEffect } from 'react';
import { removeLogin } from '../services/token.js';


function HallAttendance() {
    const navigate = useNavigate();
    const [infoClient, setInfoClient] = useState({ client: '', table: ''});
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    const [error, setError] = useState();

    const logOut = (data) => {
        removeLogin(data.token, data.role);
        navigate('/');
    };

    function sendProducts(choices) {
        getProducts()
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.filter((item) => {
                    return item.type === choices;
                })
            );
        });
    }

    useEffect(() => {
        sendProducts('breakfast');
    }, []);

    const workInformation = (e) => {
        return setInfoClient(() => {
            const info = { ...infoClient};
            info[e.target.name] = e.target.value;
            return info;
        })
    }


        
    return (
        <>
            <Header children='Atendimento' img={Logo} alt={'Logo da Burger Heroes'}/>
            <h1>Parabéns você logou no atendimento!</h1>
            <Button customClass="button_logout" clickFunction={logOut} type='button' children="Sair" />
            <Input
                customClass="input_client"
                type='text'
                name='client'
                value={infoClient.client}
                placeholder='Cliente'
                handleOnChange={workInformation}
                required
            />
            <Input
                customClass="input_client"
                type='text'
                name='table'
                value={infoClient.table}
                placeholder='Mesa'
                handleOnChange={workInformation}
                required
            />
        </>
    )  
}
export default HallAttendance;
