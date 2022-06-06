import React from "react";

const Button = (props) => {
    return(
        <button type={props.type} onClick={props.onClick}>{props.textBtn}</button>

    );
}
export default Button;
