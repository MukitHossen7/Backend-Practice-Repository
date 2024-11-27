const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;
const data = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    profession: "Software Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 30,
    profession: "Graphic Designer",
  },
  {
    id: 3,
    name: "Sam Wilson",
    age: 28,
    profession: "Digital Marketer",
  },
  {
    id: 4,
    name: "Lisa Ray",
    age: 32,
    profession: "Content Writer",
  },
  {
    id: 5,
    name: "Rahim Khan",
    age: 27,
    profession: "Photographer",
  },
];
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("welcome to my user management server");
});
app.get("/users", (req, res) => {
  res.send(data);
});
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = data.length + 1;
  data.push(newUser);
  res.send(newUser);
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
