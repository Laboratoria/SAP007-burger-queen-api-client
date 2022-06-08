import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { createUser } from "../services/auth";
import { useNavigate } from "react-router-dom"
import ErrorsMessage from "../services/ErrorsMessage";
import { login } from "../services/token";
import ShowErrors from "../components/ShowErrors";
import styles from '../components/Form.module.css';
import Logo from '../components/Logo';

function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();//o email é o nome que vc deu no campo do input
    const [password, setPassword] = useState();// o valor recebido na linha 23 é enviado para dentro do useState(valor recebido)
    const [role, setRole] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault();
        if(name.length < 3){
            setError('Nome muito curto')
            console.log('nome')
            return
        }
        if(!/\S+@\S+\.\S+/.test(email)){
            setError('Email inválido')
            console.log('email')
            return
        }
        console.log(password)
        if(password === undefined || password.length < 6){
            setError('Senha muito curta, por favor insira uma senha com mais de 6 caracteres')
            console.log('password')
            return
        }
        console.log('else')
        createUser(name, email, password, role)
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
            .catch((error) => console.log(error))
}
    return (
        <>
            <h1 className={styles.form_title}>Efetuar cadastro</h1>
            <Logo customClass="logoTwo" />
            <form className={styles.form} onSubmit={createUser}>
                {/* chamou o evento de click da função RegisterUser */}
                <div>
                    <Input
                        customClass="input_register"
                        type="text"
                        placeholder="Nome"
                        handleOnChange={(e) => setName(e.target.value)} //cada letra que digitar modifica o valor no useState() e usou o setName para atribuir o valor o que é digitado aqui é enviado junto com o evento click
                        required
                    />
                </div>
                <div>
                    <Input
                        customClass="input_register"
                        type="email"
                        placeholder="E-mail"
                        handleOnChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <Input
                        customClass="input_register"
                        type="password"
                        placeholder="Senha"
                        handleOnChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <select className={styles.button_select} defaultValue='role' placeholder='Função' onChange={(e) => setRole(e.target.value)}>
                    <option value='role' disabled hidden>Função</option>
                    <option value='attendance'>Atendimento</option>
                    <option value='kitchen'>Cozinha</option>
                </select>
                <ShowErrors type="error" message={error} changeSetError={setError} />
                <Button customClass="button_register" clickFunction={registerUser} children="Efetuar Cadastro" />
                <a className={styles.navigation} href='/Login'>Já tenho cadastro</a>
            </form>
        </>
    );
};

export default Register;