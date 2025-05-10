const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
app.use(express.json()); // ✅ Required to parse JSON body

app.get("/", (req, res) => {
  res.send("hello workd");
});

app.post("/api/getS", (req, res) => {
  const { data } = req.body;

  // Validate input
  if (!Array.isArray(data)) {
    return res.status(400).json({
      status: "error",
      message: "Expected 'data' to be an array",
    });
  }

  // Send it back
  res.status(200).json({
    status: "success",
    received: data,
  });
});

app.listen(port, () => {
  console.log("server is running ");
});
