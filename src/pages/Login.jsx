import { useState } from 'react'; //é um hook do React muito bom para ser usado com eventos
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { logInt } from "../services/auth";
import { login } from '../services/token';
import { useNavigate } from "react-router-dom"
import { ErrorsMessage } from "../services/ErrorsMessage";
import { ShowErrors } from '../components/ShowErrors';

export function Login() {
    function loginUser(e) {
        e.preventDefault()
        console.log(`Usuário ${email} foi cadastrado com a senha: ${password}`)
    }

    const [email, setName] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const [error, setError] = useState();

    function loginUser(e) {
        e.preventDefault();
        logInt(email, password)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                setError(ErrorsMessage(response));
            })
            .then((data) => {
                login(data.token, data.role);
                console.log(data)
                navigate(data.role === 'attendance' ? '/HallAttendance' : '/HallKitchen');
            })
            .catch((error));
    }

    return (
        <div>
            <h1>Efetuar login</h1>
            <form onSubmit={logInt}>
                <div>
                    <Input
                        type='text'
                        name='email'
                        id='email'
                        placeholder='E-mail'
                        handleOnChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Senha'
                        handleOnChange={(e) => setPassword(e.target.value)}
                    />
                    <Button clickFunction={loginUser} option="Entrar" />
                    <a href='/Register'>Cadastrar</a>
                    {error && <ShowErrors type="error" message={error} />}
                </div>
            </form>
        </div>
    )
}