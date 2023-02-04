import "./ExpenseFilter.css";

const years = ["2023", "2022", "2021", "2020"];

const ExpenseFilter = (props) => {
  const onSelectChangeHandler=(event)=>{
    props.onSelect(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onSelectChangeHandler}>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
