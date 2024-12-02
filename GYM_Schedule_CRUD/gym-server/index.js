require("dotenv").config();
const express = require("express");
const { connection, client } = require("./DB/connectDB");
const cors = require("cors");
const { ObjectId } = require("mongodb");
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
app.delete("/schedules/:id", async (req, res) => {
  const id = req.params.id;
  const params = { _id: new ObjectId(id) };
  const result = await scheduleCollection.deleteOne(params);
  res.send(result);
});
app.get("/", (req, res) => [res.send("Welcome to GYM Server")]);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
