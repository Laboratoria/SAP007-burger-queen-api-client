import React from "react";

const Button = (props) => {
    return(
     <button className={props.style} onClick={props.onClick}>{props.textBtn}</button>

    );
}
export default Button;
