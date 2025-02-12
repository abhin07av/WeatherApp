import React from "react";

const Button=(props)=>{
    return(
        <button onClick={props.onClick} className="Button">{props.name}</button>
    )
}

export default Button; 