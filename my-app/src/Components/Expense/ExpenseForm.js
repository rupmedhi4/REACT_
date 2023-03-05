import React from 'react'

export default function ExpenseForm() {
    
    function showData(event){
             let title= document.getElementById("text").value;
        
             console.log("Title:"+ title)
        }
       
        function showData1(event){
          let amount= document.getElementById("amount").value;

          console.log("Amount:"+ amount)
       }
      
       function showData2(event){
          let date= document.getElementById("date").value;

          console.log("date:"+ date)

        }
  


   


  return (
    <div>
       <form >
        <div>
            <label htmlFor="text">Expense Title</label>
            <input type="text" id="text"  onChange={showData}/>

            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount"  onChange={showData1}/>

            <label htmlFor="date">Date</label>
            <input type="date" id="date"  onChange={showData2}/>

            <button type='submit' id="submit">Submit</button>
            
        </div>

       </form>
    </div>
  )
}

