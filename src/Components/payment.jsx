import "./payment.css";
export function Payment() {
  return (
    <div className="payment-container">
      <form>
        <br />
        <br />
        <label>Choose payment type</label>
        <br />
        <select>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
          <option value="UPI">UPI</option>
        </select>
        <br />
        <br />
        <label>Enter card number:</label>
        <br />
        <input type="text" />
        <br />
        <br />
      </form>
    </div>
  );
}
