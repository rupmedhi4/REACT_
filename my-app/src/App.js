import logo from './logo.svg';
import ExpenseItem from './Components/ExpenseItem';
import './App.css';

function App() {
  let LocationOfExpenditure = [
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

  const expenseItems = [];
  LocationOfExpenditure.forEach((expense, index) => {
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
      {expenseItems}

      {/* <ExpenseItem
        title={LocationOfExpenditure[0].title}
        amount={LocationOfExpenditure[0].amount}
        date={LocationOfExpenditure[0].date}
      />
      <ExpenseItem
        title={LocationOfExpenditure[1].title}
        amount={LocationOfExpenditure[1].amount}
        date={LocationOfExpenditure[1].date}
      />
      <ExpenseItem
        title={LocationOfExpenditure[2].title}
        amount={LocationOfExpenditure[2].amount}
        date={LocationOfExpenditure[2].date}
      />
      <ExpenseItem
        title={LocationOfExpenditure[3].title}
        amount={LocationOfExpenditure[3].amount}
        date={LocationOfExpenditure[3].date}
      /> */}
      
    
    </div>
  );
}

export default App;
