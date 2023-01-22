import "./ExpenseItem.css";
// import { useState } from "react";

// task: update title button
const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title); //tuple:array with 2 elements,first is the state value itself本身的值, second is use for set/update state value更新它的值.useState(props.title) can take a initialize value 可以拿一个初始值。

  const date = props.date;
  const month = date.toLocaleDateString("en-AU", { month: "long" });
  const day = date.toLocaleDateString("en-AU", { day: "2-digit" });
  const year = date.getFullYear();

  // console.log("From component function", title);

  // const onButtonClickHandler = (e) => {
  //   setTitle("update title");
  //   console.log("From event handler", title);
  // };

  return (
    <div className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={onButtonClickHandler}>Update Title</button> */}
      {/* <button onClick={(e) => onButtonClickHandler(e)}>Update Title</button> */}
    </div>
  );
};

export default ExpenseItem;
