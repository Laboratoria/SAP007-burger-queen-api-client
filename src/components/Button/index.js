import "./styles.modules.css";

function Button({
    className, type, onClick, children
}){
    return(
        <button 
        className= {className}
        type={type}
        onClick={onClick}
        >
        {children}
        </button>

    )
}

export default Button