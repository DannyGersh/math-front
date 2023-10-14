import React from 'react';
import './ExpenseItem.css';
function ExpenseItem(props){
  
    return (
        <div className="expense-item">
            <div>Date</div>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                </div>
                <div className="expesne-item_price">{props.amount}$</div>
            
        </div>
    )
}
export default ExpenseItem;