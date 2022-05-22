import img from '../../assets/logo2.png'
import { Container } from './HeaderStyle';
import { Logout } from '../logout/Logout';

const Header = ({showLogOut}) => {
    const iconLogOut = <Logout />
   
    return (
        < Container  className="container">
            <img className="logo" src={img} alt="logo"/>
            {showLogOut? iconLogOut : null}
        </ Container >
    )
}

export default Header
