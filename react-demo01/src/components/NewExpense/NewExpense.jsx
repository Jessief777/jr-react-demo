import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const onAddNewExpense = (newExpense) => {
    // console.log('From NewExpense',newExpense);
    props.addNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm addNewExpense={onAddNewExpense} />
    </div>
  );
};

export default NewExpense;
