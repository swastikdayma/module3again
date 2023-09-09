import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [

  {title: ' Toilet Paper', 
  amount: 2.45,
  date:  new Date(2021, 2, 28) },

  {title: ' Car Insurance', 
  amount: 294.45,
  date:  new Date(2021, 3, 18) },

  {title: 'New Tv', 
  amount: 24.45,
  date:  new Date(2021, 4, 8) },

  {title: ' Car Insurance', 
  amount: 29.45,
  date:  new Date(2021, 5, 28) 
}
]

function App(){ 

  const[expenses,setExpenses]=useState(DUMMY_EXPENSES)
 
const addExpenseHandler = (expense) =>{
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  });
}




  return(
    <>
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      
    </div>
    <Expenses items={expenses}/>


    
    </>
  );
}
export default App;