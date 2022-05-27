import { Children } from "react";
import logo from "../../Images/logotipo.png";
import logout from "../../Images/logout.jpg";
import "./styles.modules.css";

function HeaderPedidos(Children) {
    return (
        <header
            className="header-pedidos">
            <img src={logo} alt="logotipo" className="logotype"/>
            <navbar className="menu">
                <ul>
                    {Children}
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