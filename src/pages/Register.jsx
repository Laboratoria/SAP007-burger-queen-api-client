import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { createUser } from "../services/auth";
import { useNavigate } from "react-router-dom"
import { ErrorsMessage } from "../services/ErrorsMessage";
import { login } from "../services/token";
import { ShowErrors } from "../components/ShowErrors";


export function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();//o email é o nome que vc deu no campo do input
    const [password, setPassword] = useState();// o valor recebido na linha 23 é enviado para dentro do useState(valor recebido)
    const [role, setRole] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    function registerUser(e) {
        e.preventDefault();
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
            .catch((error));
    }
    return (
        <div>
            <form onSubmit={createUser}>
                {/* chamou o evento de click da função RegisterUser */}
                <div>
                    <Input
                        type="text"
                        id="name"
                        name="name" //nome que vc deu no campo do input que é email
                        placeholder="Nome"
                        handleOnChange={(e) => setName(e.target.value)} //cada letra que digitar modifica o valor no useState() e usou o setName para atribuir o valor o que é digitado aqui é enviado junto com o evento click
                    />
                </div>
                <div>
                    <Input
                        type="text"
                        id="email"
                        name="email" //nome que vc deu no campo do input que é password
                        placeholder="E-mail"
                        handleOnChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Senha"
                        handleOnChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <select defaultValue='role' placeholder='Função' onChange={(e) => setRole(e.target.value)}>
                    <option value='role' disabled hidden>Função</option>
                    <option value='attendance'>Atendimento</option>
                    <option value='kitchen'>Cozinha</option>
                </select>
                <Button clickFunction={registerUser} option="Efetuar Cadastro" />
                <a href='/Login'>Já tenho cadastro</a>
                {error && <ShowErrors type="error" message={error} />}
            </form>
        </div>
    );
};