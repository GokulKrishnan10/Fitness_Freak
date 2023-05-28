import "./signup.css";
export default function Form() {
  return (
    <div className="form-div">
      <form>
        <label>Email</label>
        <br />
        <input type="text" placeholder="enter a email or username" />
        <br />
        <br />
        <label>Password</label>
        <br />
        <input type="password" />
        <br />
        <br />
        <button>Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}
