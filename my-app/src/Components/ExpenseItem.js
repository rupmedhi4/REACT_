import './ExpenseItem.css';


function ExpenseItem(props){

    //let LocationOfExpenditure = "CAR INSURANCE";


    return( 
    <div className="expense-item">
       <div>{props.date.toISOString()}</div>
       <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
       
        <div className="expense-item__price ">{props.amount}</div>
        
       </div>
    </div>
    )
}

export default ExpenseItem;