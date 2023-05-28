// import { useSelector } from "react-redux";
import "./chatgpt.css";
export default function Chat() {
  //   const text = useSelector((state) => state.text);
  return (
    <div className="chat-div">
      <input
        type="text"
        placeholder="Type something to search"
        style={{ height: "30px", marginLeft: "5%", marginRight: "5%" }}
      />
      <p>text</p>
      <button className="ask-button">Ask</button>
    </div>
  );
}
