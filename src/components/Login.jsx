import { useState } from 'react' //é um hook do React muito bom para ser usado com eventos

export function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuário ${email} foi cadastrado com a senha: ${password}`)
    }

    const [email, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        placeholder='E-mail'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type='password'
                        id='password'
                        name='password'
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