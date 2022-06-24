import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { logInt } from "../services/auth";
import { login } from '../services/token';
import ErrorsMessage from "../services/ErrorsMessage";
import Button from '../components/Button';
import Input from '../components/Input';
import ShowErrors from '../components/ShowErrors';
import styles from '../components/Form.module.css';
import Logo from '../components/Logo';


function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    function loginUser(e) {
        e.preventDefault();
        logInt(email, password)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                setError(ErrorsMessage(response));
                return response.json()
            })
            .then((data) => {
                if (!data.code) {
                    login(data.token, data.role);
                    navigate(data.role === 'attendance' ? '/HallAttendance' : '/HallKitchen');
                }
                return data
            })
            .catch((error));
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.form_title}>Efetuar login</h1>
            <Logo customClass='logoTwo' />
            <form className={styles.form} onSubmit={logInt}>
                <Input
                    customClass="input"
                    type='text'
                    name='email'
                    id='email'
                    placeholder='E-mail'
                    handleOnChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    customClass="input"
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Senha'
                    handleOnChange={(e) => setPassword(e.target.value)}
                />
                <div className={styles.show_errors}>
                    <ShowErrors type="error" message={error} changeSetError={setError} />
                </div>
                <Button customClass="button_enter" clickFunction={loginUser} type='button' children="Entrar" />
                <a className={styles.navigation} href='/Register'>Cadastrar</a>
            </form>
        </main>
    )
}
export default Login;