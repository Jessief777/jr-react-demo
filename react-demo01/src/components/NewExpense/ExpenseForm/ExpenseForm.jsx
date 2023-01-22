import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    //终止default refresh page的行为
    const formData = {
      title,
      amount:`$${amount}`,
      date:new Date(date),
      // 保证数据类型一致才能传入App.js
    };
    // console.log(formData);
    props.addNewExpense(formData);
  };

  const onInputChangeHandler = (event, type) => {
    const value = event.target.value;
    // console.log(`Value is ${value}: type is ${type}`);
    switch (type) {
      case "title":
        setTitle(value);
        break;
      case "amount":
        setAmount(value);
        break;
      case "date":
        setDate(value);
        break;
      default:
        console.error("unknown type");
        break;
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => onInputChangeHandler(event, "title")}
            value={title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={(event) => onInputChangeHandler(event, "amount")}
            value={amount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={(event) => onInputChangeHandler(event, "date")}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
