import './style.css';

const Input  = ({ name, placeholder, className, type, value, onChange }) =>{
    return (
            <input className="inputs"
            name = {name}
            placeholder = {placeholder}
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            />
    );
};

export default Input;