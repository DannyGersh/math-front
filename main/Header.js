import React from "react";
import  "./App.css";
import "./img/220416_00_2x.jpeg"

function Header(props){
    return (
    <header className='try1'>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          
        </header>);
}
export default Header;
