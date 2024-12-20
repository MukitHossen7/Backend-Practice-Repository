const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello mobile server. Are you ready !");
});
app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const phone =
    phones.find((phone) => phone.id === parseInt(req.params.id)) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
