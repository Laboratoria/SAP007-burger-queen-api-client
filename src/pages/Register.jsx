import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { CreateUser } from "../services/Auth";
import { Link, useNavigate, useLocation } from "react-router-dom"
import { ErrorsMessage } from "../services/ErrorsMessage";
import { SetToken } from "../services/Token";

export function Register() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();//o email é o nome que vc deu no campo do input
    const [password, setPassword] = useState();// o valor recebido na linha 23 é enviado para dentro do useState(valor recebido)
    const [role, setRole] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const localization = useLocation();
    let feedback = ' ';
    if (localization.state) {
        feedback = localization.state.feedback;
    }
    function registerUser(e) {
        e.preventDefault();
        CreateUser(name, email, password, role)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                }
                setError(ErrorsMessage(response));
            })
            .then((data) => {
                SetToken(data.token);
                navigate(data.role === 'Attendance' ? '/HallAttendance' : '/HallKitchen');
            })
            .catch((error));
    }
    return (
        <div>
            <form onSubmit={CreateUser}>
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
                <select defaultValue='Função' placeholder='Função' onChange={(e) => setRole(e.target.value)}>
                    <option selected disabled hidden>Função</option>
                    <option value='Attendance'>Atendimento</option>
                    <option value='Kitchen'>Cozinha</option>
                </select>
                <Button clickFunction={registerUser} option="Efetuar Cadastro" />
                <a href='/Login'>Já tenho cadastro</a>
            </form>
        </div>
    );
};






// export function Register() {
//     function registerUser(e) {
//         e.preventDefault();
//         console.log(
//             `Usuário ${name} foi cadastrado com o ${email} e a senha: ${password}`
//         );
//     }

//     const [name, setName] = useState();
//     const [email, setEmail] = useState();//o email é o nome que vc deu no campo do input
//     const [password, setPassword] = useState();// o valor recebido na linha 23 é enviado para dentro do useState(valor recebido)
//     const [role, setRole] = useState();
//     const [error, setError] = useState();

//     return (
//         <div>
//             <form onSubmit={registerUser}>
//                 {/* chamou o evento de click da função RegisterUser */}
//                 <div>
//                     <Input
//                         type="text"
//                         id="name"
//                         name="name" //nome que vc deu no campo do input que é email
//                         placeholder="Nome"
//                         handleOnChange={(e) => setName(e.target.value)} //cada letra que digitar modifica o valor no useState() e usou o setName para atribuir o valor o que é digitado aqui é enviado junto com o evento click
//                     />
//                 </div>
//                 <div>
//                     <Input
//                         type="text"
//                         id="email"
//                         name="email" //nome que vc deu no campo do input que é password
//                         placeholder="E-mail"
//                         handleOnChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="password"
//                         id="password"
//                         name="password"
//                         placeholder="Senha"
//                         handleOnChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>
//                 <Button clickFunction="" option="Efetuar Cadastro" />
//                 <a href='/Attendance'>Já tenho cadastro</a>
//             </form>
//         </div>
//     );
// }