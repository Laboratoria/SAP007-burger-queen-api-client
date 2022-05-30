import img from '../../images/logo5.png'
import { Container } from './HeaderLogoStyle';
import { Logout } from '../logout/Logout';

const HeaderLogo = ({showLogOut}) => {
    const iconLogOut = <Logout />
   
    return (
        < Container  className="container">
            <img className="logo" src={img} alt="logo"/>
            {showLogOut? iconLogOut : null}
        </ Container >
    )
}

export default HeaderLogo
