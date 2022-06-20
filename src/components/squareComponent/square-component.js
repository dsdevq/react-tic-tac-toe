import React from "react";
import './square-component.css'

const Square = (props) => {
  
  return (
    <button 
    className="square"
    onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  )
}

export default Square