import './style.css';
import logo from '../../img/logo.png';

const Icone= ({logo}) =>{
    return (
    <div className='div-logo'>
        <img className='icone' src={logo} /> 
    </div>
    )
}

export default Icone;
