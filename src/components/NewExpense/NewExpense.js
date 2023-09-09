import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
    function saveExperessDataHandler(enteredExpenseData){
const expenseData= {
     ...enteredExpenseData,
     id: Math.random().toString()
};
   props.onAddExpense(expenseData);
    } ;

    return ( <>
    <div className='new-expense'>
       <ExpenseForm onSaveExpenseData={saveExperessDataHandler}/>
    </div>
    </> );
}

export default NewExpense;