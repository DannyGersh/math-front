import React from 'react';
import './App.css';
import ExpenseItem from './ExpenseItem';

export function App() {

   const expenses = [ {title: 'car insurance', amount: 666,date:new Date(2022, 8, 28),},
   {title: 'paper', amount:6,date:new Date(2020, 8, 28),},
   {title: 'bubka', amount:666,date:new Date(2022, 7, 9),},];
    
    return (
      <div>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount } date={expenses[0].date}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount } date={expenses[1].date}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount } date={expenses[2].date}></ExpenseItem>
       </div>


    );

}