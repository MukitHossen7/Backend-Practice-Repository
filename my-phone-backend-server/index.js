const express = require("express");
const phones = require("./phones.json");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to the phone server");
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
  console.log(`Example app listening on port ${port}`);
});
