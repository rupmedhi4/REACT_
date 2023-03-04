import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import ReactDOM from 'react-dom';

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("clicked....");
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
          <h2 className="expense-item h2">{props.title}</h2>

          <div className="expense-item__price ">{props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>

        <button onClick={DeleteExpense}>Delete expense</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
