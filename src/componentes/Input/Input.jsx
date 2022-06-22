import React from "react";
import style from "../Input/input.module.css"

const Input = (props) => {
    return(
      <input 
      className= {`${style.input} ${props.className || ""}`}
       id = {props.id}
       name = {props.name}
       type = {props.type}
       onChange={props.onChange}
       placeholder = {props.placeholder}
       value = {props.value}
       required = {true}
       />
    )
}

export default Input;