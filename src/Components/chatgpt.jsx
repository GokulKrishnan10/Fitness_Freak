// import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./chatgpt.css";
import axios from "axios";
import { useState } from "react";
// import Bard from "google-bard-api";

export default function Chat() {
  const [bard, setBard] = useState("Type something get answer from");
  async function getResult(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    const data = Object.assign({}, formValues);
    console.log("Data", data, "and", data.para);
    axios
      .get("http://127.0.0.1:8000/chat-bard-api", {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          prompt: data.para,
        },
      })
      .then((response) => {
        console.log("Response:", response["data"].data, "\n", "hello");
        setBard(response["data"].data);
        // Handle the response data
      })
      .catch((error) => {
        console.log("Error:", error);
        // Handle the error
      });
    console.log("Response---->");
  }
  return (
    <div className="chat-div">
      <form action="submitted" method="post" onSubmit={getResult}>
        <input
          name="para"
          type="text"
          placeholder="Type something to search"
          style={{ height: "30px", marginLeft: "5%", marginRight: "5%" }}
        />
        <p style={{ marginLeft: "5%", marginRight: "5%" }}>{bard}</p>
        <button className="ask-button">Ask</button>
      </form>
    </div>
  );
}
