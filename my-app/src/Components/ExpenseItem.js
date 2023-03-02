import './ExpenseItem.css';


function ExpenseItem(){

    let LocationOfExpenditure = "CAR INSURANCE";


    return( 
    <div className="expense-item">
       <div>01-03-2023</div>
       <div className="expense-item__description">
        <h2 className="expense-item h2">{LocationOfExpenditure}</h2>
        <div className="expense-item__price ">1000</div>
        
       </div>
    </div>
    )
}

export default ExpenseItem;