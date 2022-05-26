import "./style.css"

const Button= (props)=>{
    return (
        <button className={props.cor}>{props.children}</button>
    )
}

export default Button;