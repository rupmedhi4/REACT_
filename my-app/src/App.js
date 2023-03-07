import React, { useState } from 'react'
import logo from './logo.svg';
import ExpenseItem from './Components/Expense/ExpenseItem';
import './App.css';
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const LocationOfExpenditure = [
    {
      
      title: 'Toilet Paper',
      amount: 376,
      date: new Date("2022,4,5"),
    },
    {
      title: 'New TV',
      amount: 756,
      date: new Date(" 2022,1,9"),
    },
    {
      title: 'Car Insurance',
      amount: 4644,
      date: new Date('2022,6,2'),
    },
    {
      title: 'New Desk (Wooden)',
      amount: 256,
      date: new Date('2022,4,7'),
    },
  ];

 

  // const addExpenseHandler = (expense)=>{
     
     
  // };

  const [expenses, setExpenses] = useState(LocationOfExpenditure);

  const addExpenseHandler = (expense) => {
    setExpenses((PreexpenseItems) => {
      return [...PreexpenseItems, expense];
    });
  };


   const expenseItems = [];
  expenses.forEach((expense, index) => {
    expenseItems.push(
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
 
  return (
    <div>
     {/* <ExpenseForm/> */}
     <NewExpense onAddExpense={addExpenseHandler}/>
      {expenseItems}
      
    </div>
  );
}

export default App;