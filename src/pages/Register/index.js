import Logo from './LogoBQ.png'
import {useState} from 'react'
import { createUser } from '../../services/auth'
import {MessageError} from '../../components/MessageError'
import {codeStatus} from '../../services/erros'
import './Register.css'
import { useNavigate } from 'react-router-dom'

function Register() {

const navigate = useNavigate()
    
const [errorMessage, setErrorMessage] = useState('');

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
        .then((response) =>  {
            console.log(response)
            if (response.status === 200) { 
            return response.json();
            }
            switch (response.status) {
                case 400:
                    setErrorMessage("Preencha todos os campos");
                break;
                case 403:
                    setErrorMessage("Email já cadastrado");
                break;
                default:
                    setErrorMessage("Erro, tente novamente");
        
            } 
            setErrorMessage(codeStatus(response))
        })

        .then((data) => {
            if (data.role === "atendente") {
                navigate ("../Hall")
            }
            else if (data.role === "cozinheiro") {
                navigate ("../Kitchen")
            }   

        }).catch((error) => {
            console.log(error);
        });   
    };


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

            <MessageError
            disable={errorMessage ? false : true}
            message={errorMessage}
                />

            <p className="paragraph-form">Escolha o cargo:</p>
            <div className="text3">
        
                <input type="radio" id="role" value="atendente" name="cargo"  onChange={handleChange} />
                <label className="button-radio">Atendente</label>
                <input type="radio" id="role" value="cozinheiro" name="cargo" onChange={handleChange} />
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

export default Register;