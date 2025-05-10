const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello workd");
});

app.listen(port, () => {
  console.log("server is running ");
});
