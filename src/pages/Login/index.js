import Logo from './LogoBQ.png'
import './login.css'
import {loginUser} from '../../services/auth'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()

    const [infosUser, setInfosUser] = useState({
    
        email: '',
        password: '',

    })
    function handleChange(e) {
        setInfosUser({...infosUser, [e.target.id]:e.target.value})
    console.log(e.target.value)
        }
    

        async function handleSubmit(e) {
            try {
            e.preventDefault()
            const response = await loginUser (infosUser.email, infosUser.password)
            const returnJson = await response.json()
            console.log(returnJson.role)
            
            switch (returnJson.role){
                case "atendente" :
                    navigate("../Hall")
                    break 
                    case "cozinheiro" :
                    navigate("../Kitchen")
                    break
                    default :
                    navigate("../Login")
            }
        }
        catch(error) {console.log(error)}
    }
            


    return (
    <div className="container">
        <div className="container-login">
        <div className="wrap-login">
            <form className="login-form">
            <span className="login-form-title">The Burger Queen</span>

            <span className="login-form-title">
                <img src={Logo} alt="Hamburguer com coroa" />
            </span>

            <div className="wrap-input">
                <input className="input" type="email" id="email" value={infosUser.email} onChange={handleChange}/>
                <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
                <input className="input" type="password" value={infosUser.password} onChange={handleChange} id="password"/>
                <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
                <button className="login-form-btn" onClick={handleSubmit}>Login</button>
            </div>

            <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" href="/Register">
                Criar conta
                </a>
            </div>
            </form>
        </div>
        </div>
    </div>
    );
}


export default Login;