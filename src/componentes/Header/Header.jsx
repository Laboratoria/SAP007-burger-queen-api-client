import Logo from "../../img/logo.svg"
import style from "../Header/header.module.css"

const Header = () => {
    return (
        <picture className={style.picture}>
            <img src={Logo} alt="Logo" className={style.logo} />
        </picture>
    )

}

export default Header;