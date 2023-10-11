import React from 'react';
import './App.css';
import {useState} from 'react';

import ExpenseItem from './ExpenseItem';

export function App() {
    const[count,setCount]=useState(0);
    
    return (
        <div>
        <ExpenseItem></ExpenseItem>
        <div className="app">
            <h1>{count}</h1>
            <div classname="button-wraper">
                <button onClick={()=>setCount(count-1)}>-</button>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
        </div>
        </div>


    );

}