export const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>Text</label>
          <input
            type="text"
            value=""
            id="text"
            placeholder="Enter text..."
          ></input>
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input
            type="number"
            value=""
            id="amount"
            placeholder="Enter amount..."
          ></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
