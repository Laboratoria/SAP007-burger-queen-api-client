import { useState } from 'react' //é um hook do React muito bom para ser usado com eventos
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function Login() {
    function loginUser(e) {
        e.preventDefault()
        console.log(`Usuário ${email} foi cadastrado com a senha: ${password}`)
    }

    const [email, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Efetuar login</h1>
            <form onSubmit={loginUser}>
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
                </div>
            </form>
        </div>
    )
}