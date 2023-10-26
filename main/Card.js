import React from "react";
import "./App.css"
function Card(props){
    return (
        <li>
            
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </li> 
    );
}
export default Card;
