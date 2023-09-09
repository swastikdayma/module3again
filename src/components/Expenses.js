import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";



function Expenses(props) {

  const [filteredYear,setFilteredYear]= useState('2020');

  let filterInfoText= '2019, 2021 & 2022';
  if (filteredYear==='2019'){
    filterInfoText='2020, 2021 & 2022';
  }else if(filteredYear==='2020'){
    filterInfoText='2019, 2021 & 2022';
  }else if(filteredYear==='2021'){
  filterInfoText='2019, 2020 & 2022';
}else{
  filterInfoText='2019, 2020 & 2021';
}

  const filterChangeHandler= (selectedYear)=>{
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
    return (
    <Card className="expenses">
      <ExpensesFilter
       selected={filteredYear}
       onChangeFilter={filterChangeHandler}
       />
       {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
       {filteredExpenses.length > 0 && 
      filteredExpenses.map((expense) => (
  <ExpenseItem 
      key={expense.id}
     title={expense.title}
     amount={expense.amount}
     date={expense.date}
   />
   ))
       }
       ;
       <p>Data for years {filterInfoText} is hidden.</p>
    {/* <ExpenseItem 
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date} ></ExpenseItem >
    <ExpenseItem     
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date} ></ExpenseItem >
    <ExpenseItem 
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}></ExpenseItem >
    <ExpenseItem   
       title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}></ExpenseItem >  */}
    </Card>
    );
}

export default Expenses;