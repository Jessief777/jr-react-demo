import { useState } from "react";
import "./App.css";
//create react 专用语法引入css
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const initialExpenses = [
    {
      id:"1",
      date: new Date(2022, 12, 20),
      title: "Car Insurance",
      amount: "$1500",
    },
    {
      id:"2",
      date: new Date(2022, 12, 25),
      title: "Toilet Paper",
      amount: "$3.5",
    },
    {
      id:"3",
      date: new Date(2022, 12, 30),
      title: "Myki top up",
      amount: "$50",
    },
  ];

  const [expenses, setExpenses] = useState(initialExpenses);

  console.log("expenses", expenses);
  // 解决async问题, 需要把打印放到onAddNewExpense function主体外，因为setExpenses本身是一个async(执行是需要时间的，不会等到执行完才跳到下一行，所以console log 会直接打印，这是我们不想要的结果)，最终setExpenses完成后会触发组件的重新渲染，当触发组件重新渲染的时候，必然是因为state变了(新的expense被加进去array了），所以能把更新后的打印进去这个array)

  const onAddNewExpense = (newExpense) => {
    // console.log("From App", newExpense);
    setExpenses([...expenses, newExpense]);
    //better to create a new array instead of change the original array
    console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpense addNewExpense={onAddNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
