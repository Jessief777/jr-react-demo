import "./ExpensesItemCard.css"

const ExpenseItemCard = (props)=>{
  return (
    <div className="card">
      {/* props.children: */}
      {/* {props.content} */}
      {props.children}
    </div>
  )
}

export default ExpenseItemCard