import React from 'react';
import './ExpenseForm.css';

export default function ExpenseForm() {
  return (
   <form>
       <div className='new-expense__controls'>

           <div className='new-expense__controls'>
              <label>Title</label>
              <input type="text" />
           </div>

           <div className='new-expense__controls'>
              <label>Amount</label>
              <input type="number" min="0.01" step="0.01" />
           </div>

           <div className='new-expense__controls'>
              <label>Date</label>
              <input type="date" min="2019-01-01" max="2023-03-31" />
           </div>

       </div>
       <div className='new-expense__actions'>
        <button type='submit'>Submit</button>
       </div>
   </form>
  )
}
