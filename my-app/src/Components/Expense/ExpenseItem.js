import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import ReactDOM from 'react-dom';
import { useState } from "react";


const ExpenseItem = (props)=> {
  const [title, setTitle] =useState(props.title);
  const [amount, setAmount] = useState(props.amount);


const Change_Expense = ()=>{
  setAmount("$100")
}

  const clickHandler = () => {
    setTitle("update");
    
  };

  const DeleteExpense =() =>{
    const expenseItemElement = document.querySelector('.expense-item');
    expenseItemElement.parentNode.removeChild(expenseItemElement);
    
  }

  return (
    <div>
    
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2 className="expense-item h2">{title}</h2>

          <div className="expense-item__price ">{amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>

        <button onClick={DeleteExpense}>Delete expense</button>

        <button onClick={Change_Expense}>Change Expense</button>
      </div>
    </div>
  );
}

export default ExpenseItem;