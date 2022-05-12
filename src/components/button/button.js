function Button({
    className, type, onClick,nome
}){
    return(
        <button 
        className= {className}
        type={type}
        onClick={onClick}
        >
        {nome}
        </button>

    )
}

export default Button