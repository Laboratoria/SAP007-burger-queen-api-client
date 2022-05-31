import "./style.css"

const Button= ({className, type, onclick, children, value})=>{
    return (
        <button 
            type={type}
            className={className}
            onclick={onclick}
            value={value}
            >
                {children}
        </button>
    );
};

export default Button;