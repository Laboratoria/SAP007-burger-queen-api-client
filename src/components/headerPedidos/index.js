import logo from "../../Images/logotipo.png";
import logout from "../../Images/logout.jpg";
import "./styles.modules.css";

function HeaderPedidos(onClick) {
    return (
        <header
            className="header-pedidos">
            <img src={logo} alt="logotipo" className="logotype"/>
            <navbar className="menu">
                <ul>
                    <li>
                        <a href="" onClick={onClick}>Café da manhã</a>
                    </li>
                    <li>
                        <a href="" onClick={onClick}> Dia Todo</a>
                    </li>
                    <li>
                        <a href="" onClick={onClick}>Pedidos</a>
                    </li>
                </ul>
                <hr></hr>
            </navbar>
            <button className="logout">
                    <img src={logout}></img>
            </button>
        </header>
    );
}

export default HeaderPedidos;