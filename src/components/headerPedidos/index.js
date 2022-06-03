
import logo from "../../Images/logotipo.png";
import logout from "../../Images/logout.jpg";
import "./styles.modules.css";
import { removeToken, removeName, removeRole } from "../../services/storage";

import { useNavigate } from "react-router-dom";

function HeaderPedidos({links, className}) {
    const navigate = useNavigate();
    function logoutUser(){
        removeToken()
        removeName()
        removeRole()
        navigate("/", {message: "redirecionando"})
    }

    return (
        <header
            className="header-pedidos">
            <img src={logo} alt="logotipo" className="logotype" />
            <navbar className="menu">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <button className={className} onClick={link.onClick}>{link.name}</button>
                        </li>
                    ))}
                   
                </ul>
                <hr></hr>
            </navbar>
            <button className="logout" onClick={ ()=>logoutUser()}>
                <img src={logout} alt="Deslogar" ></img>
            </button>
        </header>
    );
}

export default HeaderPedidos;