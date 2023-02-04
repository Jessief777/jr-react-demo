// >= React(18)可以省略：
import React from "react";
import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import ExpenseItem from "./ExpensesItem/ExpenseItem.jsx";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2023");

  const onFilterSelected = (filter) => {
    setFilter(filter);
  };

  const expenses = props.expenses;

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filter
  );

  let expensesContent = <p className="no-result">No result found</p>;

  if (filteredExpenses && filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        key={expenses.id}
      />
    ));
  }

  return (
    <div className="expenses">
      {/* <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      /> */}
      <ExpenseFilter onSelect={onFilterSelected} selected={filter} />
      {/* {filteredExpenses && filteredExpenses.length > 0 ? 
        filteredExpenses.map((expense) => (
          <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
            key={expenses.id}/>
          )) : <p className="no-result">No result found</p>} */}
      {expensesContent}
    </div>
  );
};

export default Expenses;
