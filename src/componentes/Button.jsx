import React from "react";

const Button = ({ children, onClick, style }) => {
    return(
     <button className={style} onClick={onClick}>{children}</button>

    );

}
export default Button;
