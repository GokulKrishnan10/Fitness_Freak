import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/signup";
import Display from "./Components/display";
import Chat from "./Components/chatgpt";
import { Purchase } from "./Components/purchase";
import { Fotter } from "./Components/fotter";
import { Payment } from "./Components/payment";
import { Profile } from "./Components/profile";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className="navigation-div">
        <ul className="navigation">
          <li>Home</li>
          <li>Consultation</li>
          <li>Profile</li>
        </ul>
        <br />
        <br />
      </div>
      <div className="flex-div">
        <Display />
        <Form />
      </div>
      <Chat />
      <Purchase />
      <Payment />
      <Fotter />
      <Profile />
    </div>
  );
}

export default App;
