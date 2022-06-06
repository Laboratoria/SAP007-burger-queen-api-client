import React from "react";
import style from "../Input/input.module.css"

const Input = (props) => {
    return(
      <input className={style.input}
       id = {props.id}
       name = {props.name}
       type = {props.type}
       placeholder = {props.placeholder}
       value = {props.value}
       />
    )
}

export default Input;