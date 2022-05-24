import img from '../../images/welcome.gif'
import { ContainerWelcome } from './headerStyleWelcome';



const HeaderWelcome  = () => {
    
    return (
        < ContainerWelcome  className="container">
            <img className="logo" src={img} alt="logo"/>
            <p>Seja bem vinda, colaboradora!</p>
            
            
        </ ContainerWelcome >
    )
}

export default HeaderWelcome


