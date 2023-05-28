const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Good Response</h1>`);
});
app.get("/:id", (req, res) => {
  res.status(200).send(`<h1>${req.params.id}</h2>`);
});
app.listen(4000, () => console.log("Server running on 4000"));
