import { useState } from "react";

export function Register() {
    function registerUser(e) {
        e.preventDefault();
        console.log(
            `Usuário ${name} foi cadastrado com o ${email} e a senha: ${password}`
        );
    }

    const [name, setName] = useState();
    const [email, setEmail] = useState();//o email é o nome que vc deu no campo do input
    const [password, setPassword] = useState();// o valor recebido na linha 23 é enviado para dentro do useState(valor recebido)

    return (
        <div>
            <form onSubmit={registerUser}>
                {/* chamou o evento de click da função RegisterUser */}
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name" //nome que vc deu no campo do input que é email
                        placeholder="Nome"
                        onChange={(e) => setName(e.target.value)} //cada letra que digitar modifica o valor no useState() e usou o setName para atribuir o valor o que é digitado aqui é enviado junto com o evento click
                    />
                </div>
                <div>
                    <input
                        type="text"
                        id="email"
                        name="email" //nome que vc deu no campo do input que é password
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="passsword"
                        name="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}