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
  const { searchParams } = req.query;

  if (searchParams) {
    const findSchedule = await scheduleCollection
      .find({
        title: { $regex: searchParams, $options: "i" },
      })
      .toArray();
    return res.send(findSchedule);
  }
  const schedule = await scheduleCollection.find().sort({ _id: -1 }).toArray();
  return res.send(schedule);
});

app.get("/schedules/:id", async (req, res) => {
  const id = req.params.id;
  const params = { _id: new ObjectId(id) };
  const result = await scheduleCollection.findOne(params);
  res.send(result);
});
app.post("/schedules", async (req, res) => {
  const schedule = req.body;
  const result = await scheduleCollection.insertOne(schedule);
  res.send(result);
});
app.patch("/schedules/:id", async (req, res) => {
  const id = req.params.id;
  const schedule = req.body;
  const params = { _id: new ObjectId(id) };
  const updated = {
    $set: {
      title: schedule.title,
      day: schedule.day,
      time: schedule.time,
      date: schedule.date,
    },
  };
  const result = await scheduleCollection.updateOne(params, updated);
  res.send(result);
});
app.patch("/status/:id", async (req, res) => {
  const id = req.params.id;
  const params = { _id: new ObjectId(id) };
  const updated = {
    $set: {
      isComplete: true,
    },
  };
  const result = await scheduleCollection.updateOne(params, updated);
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
