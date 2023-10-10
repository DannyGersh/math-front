import React from 'react';
import './App.css';
const{useState}=React;

export function App() {
    const[count,setCount]=useState(0);
    
    return (
        <div className="app">
            <h1>{count}</h1>
            <div classname="button-wraper">
                <button onClick={()=>setCount(count-1)}>-</button>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
    );
}