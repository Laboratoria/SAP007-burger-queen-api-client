
import logo from "../../Images/logotipo.png";
import logout from "../../Images/logout.jpg";
import "./styles.modules.css";
import { removeToken, removeName, removeRole } from "../../services/storage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function HeaderPedidos({links}) {
    const navigate = useNavigate();
    function logoutUser(){
        removeToken()
        removeName()
        removeRole()
        navigate("/", {message: "redirecionando"})
    }
    
    const [list, setList] = useState(links.map((link, index) => { 
        const listobj = link
        if (index === 0){
            listobj.selected = true
        } else {
            listobj.selected = false
        }
        return listobj
    }))

    function handleClick(link, index) {
        const newList = list.map((li, i)=> {
            if(index === i){
                li.selected = true
            }else{
                li.selected = false
            }

            return li
        })
        setList(newList)
        link.onClick()
    }

    return (
        <header
            className="header-pedidos">
            <img src={logo} alt="logotipo" className="logotype" />
            <navbar className="menu">
                <ul>
                    {list.map((link, index) => (
                        <li key={index}>
                            <button className={ link.selected ? "selected" : "option"} onClick={ () => handleClick(link, index)}>{link.name}</button>
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