// >= React(18)可以省略：
import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpensesItem/ExpenseItem.jsx";

const Expenses = (props) => {
  const expenses = props.expenses;
  // const expenses = [
  //   {
  //     date: new Date(2022, 12, 20),
  //     title: "Car Insurance",
  //     amount: "$1500",
  //   },
  //   {
  //     date: new Date(2022, 12, 25),
  //     title: "Toilet Paper",
  //     amount: "$3.5",
  //   },
  //   {
  //     date: new Date(2022, 12, 30),
  //     title: "Myki top up",
  //     amount: "$50",
  //   },
  // ];
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
      {expenses.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          key={expenses.id}
        />
      ))}
    </div>
  );
};

export default Expenses;
