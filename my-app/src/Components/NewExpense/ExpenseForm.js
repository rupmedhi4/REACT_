import React, { useState } from 'react'
import './ExpenseForm.css'


export default function ExpenseForm(props) {

  const [EnteredTitle, SetEnteredTitle]= useState("");
  const [EnteredAmount, SetEnteredAmount]= useState("");
  const [EnteredDate, SetEnteredDate]= useState("");
    
        function showTitle(event){
           SetEnteredTitle(event.target.value);
        }
       
        function showAmount(event){
          SetEnteredAmount(event.target.value);
        }
      
        function showData(event){
        SetEnteredDate(event.target.value);
        } 
  

        function SubmitBtn(event) {
            event.preventDefault();
            const ObjData = {
              title: EnteredTitle,
              amount: EnteredAmount,
              date: new Date(EnteredDate)
            };

            props.onSaveExpenseData(ObjData);

            SetEnteredTitle("");
            SetEnteredAmount("");
            SetEnteredDate("");

          }



  return (
    <div>
       <form onSubmit={SubmitBtn}>
        <div className='new-expense__controls'>
            <label htmlFor="text">Expense Title</label>
            <input type="text" id="text" value={EnteredTitle} onChange={showTitle}/>

            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" value={EnteredAmount} onChange={showAmount}/>

            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={EnteredDate} onChange={showData}/>

            <button type='submit' id="submit">Submit</button>
            
        </div>

       </form>
    </div>
  )
}

