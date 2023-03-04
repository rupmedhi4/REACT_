import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';




function ExpenseItem(props){

  
    return( 
    <div className="expense-item">
       <ExpenseDate date={props.date}/>
       <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
       
        <div className="expense-item__price ">{props.amount}</div>
        {/* <ExpenseDetails title={props.title}/> */}
       </div>
    </div>
    )
}

export default ExpenseItem;
