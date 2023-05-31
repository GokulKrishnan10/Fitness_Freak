const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.status(200).send(`<h1>Good Response</h1>`);
});

app.get("/chat-bard", async (req, res) => {
  try {
    console.log("Request params", req.query);
    const response = await axios.get("http://127.0.0.1:8000/chat-bard-api", {
      params: {
        prompt: req.query.prompt,
      },
    });
    console.log("Response---------->", response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.log("Error-------------------->", error);
    res.status(500).send("Error Have Occurred");
  }
});

app.listen(4000, () => console.log("Server running on 4000"));
