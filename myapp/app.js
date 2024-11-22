const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello, world ,,, This is my first server");
});
app.get("/blog", (req, res) => {
  res.send("Welcome to my blog");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
