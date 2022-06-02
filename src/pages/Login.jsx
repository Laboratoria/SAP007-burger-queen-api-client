import { useState } from 'react'; //é um hook do React muito bom para ser usado com eventos
import Button from '../components/Button';
import { Input } from '../components/Input';
import { logInt } from "../services/auth";
import { login } from '../services/token';
import { useNavigate } from "react-router-dom";
import { ErrorsMessage } from "../services/ErrorsMessage";
import { ShowErrors } from '../components/ShowErrors';
import styles from '../components/Form.module.css';
import Logo from '../components/Logo';


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [error, setError] = useState();

    function loginUser(e) {
        e.preventDefault();
        console.log(`Usuário ${email} foi cadastrado com a senha: ${password}`)
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
        <>
            <h1 className={styles.form_title}>Efetuar login</h1>
            <Logo />
            <form className={styles.form} onSubmit={logInt}>
                <Input
                    type='text'
                    name='email'
                    id='email'
                    placeholder='E-mail'
                    handleOnChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Senha'
                    handleOnChange={(e) => setPassword(e.target.value)}
                />
                <Button clickFunction={loginUser} type='button' children="Entrar" />
                <a className={styles.navigation} href='/Register'>Cadastrar</a>
                {error && <ShowErrors type="error" message={error} />}
            </form>
        </>
    )
}
export default Login;