import Logo from './LogoBQ.png'
import {useState} from 'react'
import { createUser } from '../../services/auth'
import './Register.css'

function Register() {

    const [infosUser, setInfosUser] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    })

    function handleChange(e) {
    setInfosUser({...infosUser, [e.target.id]:e.target.value})
console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        createUser(infosUser.name, infosUser.email, infosUser.password, infosUser.role)
        .then((response) =>  {console.log(response)})
            //if(response.status === 200) { 
           // return response.json()})

    }

    return(
        <div className="container">
        <div className="container-register">
        <div className="wrap-register">
            <form className="register-form">
            <span className="register-form-title">The Burger Queen</span>

            <span className="register-form-title">
                <img src={Logo} alt="Hamburguer com coroa" />
            </span>
                <h1 className="Title-h1">Bem-vindo(a)!</h1>
            <div className="wrap-input">
                <input className="input" type="text" id="name" onChange={handleChange} value={infosUser.name}/>
                <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
                <input className="input" type="email" id="email" onChange={handleChange} value={infosUser.email}/>
                <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
                <input className="input" type="password" id="password" onChange={handleChange} value={infosUser.password} />
                <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <p className="paragraph-form">Escolha o cargo:</p>
            <div className="text3">
        
                <input type="radio" id="atendente" value="atendente"  onChange={handleChange} />
                <label className="button-radio">Atendente</label>
                <input type="radio" id="cozinheiro" value="cozinheiro" onChange={handleChange} />
                <label className="button-radio">Cozinheiro</label> 
            </div>

            <div className="container-register-form-btn">
                <input type="submit" value="Cadastrar" className="register-form-btn" onClick={handleSubmit}/>
            </div>

            <div className="text-center">
                <span className="txt1">Já possui conta? </span>
                <a className="txt2" href="/">
                Login
                </a>
            </div>
            </form>
        </div>
        </div>
    </div>
    )
}

export default Register