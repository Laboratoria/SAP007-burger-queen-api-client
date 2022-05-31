
import logo from "../../Images/logotipo.png";
import logout from "../../Images/logout.jpg";
import "./styles.modules.css";

function HeaderPedidos({links}) {
    return (
        <header
            className="header-pedidos">
            <img src={logo} alt="logotipo" className="logotype" />
            <navbar className="menu">
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <button className="option" onClick={link.onClick}>{link.name}</button>
                        </li>
                    ))}
                   
                </ul>
                <hr></hr>
            </navbar>
            <button className="logout">
                <img src={logout} alt="Deslogar"></img>
            </button>
        </header>
    );
}

export default HeaderPedidos;