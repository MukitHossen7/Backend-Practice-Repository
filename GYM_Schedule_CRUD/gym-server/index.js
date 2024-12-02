require("dotenv").config();
const express = require("express");
const { connection, client } = require("./DB/connectDB");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
connection();
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

const scheduleCollection = client.db("scheduleDB").collection("scheduleData");

app.get("/schedules", async (req, res) => {
  const schedule = await scheduleCollection.find().sort({ _id: -1 }).toArray();
  res.send(schedule);
});
app.post("/schedules", async (req, res) => {
  const schedule = req.body;
  const result = await scheduleCollection.insertOne(schedule);
  res.send(result);
});
app.get("/", (req, res) => [res.send("Welcome to GYM Server")]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
