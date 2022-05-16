import { useState } from 'react' //é um hook do React muito bom para ser usado com eventos

function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${email} foi cadastrado com a senha: ${password}`)
    }

    const [email, setName] = useState() //o email é o nome que vc deu no campo do input
    const [password, setPassword] = useState() // o valor recebido na linha 23 é enviado para dentro do useState(valor recebido)

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                {/* chamou o evento de click da função CadastrarUsuario */}
                <div>
                    <input
                        type='text'
                        id='email'
                        name='email' //nome que vc deu no campo do input que é email
                        placeholder='E-mail'
                        onChange={(e) => setName(e.target.value)} //cada letra que digitar modifica o valor no useState() e usou o setName para atribuir o valor o que é digitado aqui é enviado junto com o evento click
                    />
                </div>
                <div>
                    <input
                        type='password'
                        id='password'
                        name='password' //nome que vc deu no campo do input que é password
                        placeholder='Senha'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type='submit' value='Cadastrar' />
                </div>
            </form>
        </div>
    )
}

export default Form