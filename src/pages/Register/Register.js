import Logo from './LogoBQ.png'
import './Register.css'

function Register() {

    return(
        <div className="container">
        <div className="container-register">
        <div className="wrap-register">
            <form className="register-form">
            <span className="register-form-title">The Burger Queen</span>

            <span className="register-form-title">
                <img src={Logo} alt="Hamburguer com coroa" />
            </span>
                <h1 className="Title-h1">Cadastro</h1>
            <div className="wrap-input">
                <input className="input" type="text" id="name"/>
                <span className="focus-input" data-placeholder="Nome"></span>
            </div>

            <div className="wrap-input">
                <input className="input" type="email"/>
                <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
                <input className="input" type="password"/>
                <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <p className="paragraph-form">Cargo:</p>
            <div className="text3">
        
                <input type="radio" id="atendente-btn" value="atendente" />
                <label className="button-radio">Atendente</label>
                <input type="radio" id="cozinheiro-btn" value="cozinheiro"/>
                <label className="button-radio">Cozinheiro</label> 
            </div>

            <div className="container-register-form-btn">
                <input type="submit" value="Cadastrar" className="register-form-btn"/>
            </div>

            <div className="text-center">
                <span className="txt1">Já possui conta? </span>
                <a className="txt2" href="#">
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