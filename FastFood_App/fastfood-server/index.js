require("dotenv").config();
const express = require("express");
const { connection, client } = require("./DB/connectDB");
const { ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
connection();

// Middleware for parsing JSON requests
app.use([express.json(), cors()]);
// Middleware for parsing JSON request

const database = client.db("foodDB");
const foodCollection = database.collection("food");
const userCollection = database.collection("user");
app.get("/foods", async (req, res) => {
  const foods = await foodCollection.find().sort({ _id: -1 }).toArray();
  res.send(foods);
});
app.get("/foods/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await foodCollection.findOne(query);
  res.send(result);
});
app.get("/foods/category/:category", async (req, res) => {
  const category = req.params.category.toLowerCase();
  const query = { category };
  const foods = await foodCollection.find(query).toArray();
  res.send(foods);
});
app.post("/foods", async (req, res) => {
  const food = req.body;
  const result = await foodCollection.insertOne(food);
  res.send(result);
});
app.delete("/foods/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await foodCollection.deleteOne(query);
  res.send(result);
});
app.put("/foods/:id", async (req, res) => {
  const id = req.params.id;
  const foods = req.body;
  const options = { upsert: true };
  const query = { _id: new ObjectId(id) };
  const updateFood = {
    $set: {
      name: foods.name,
      price: foods.price,
      details: foods.details,
      category: foods.category,
      photo: foods.photo,
    },
  };
  const result = await foodCollection.updateOne(query, updateFood, options);
  res.send(result);
});

// User Collection
app.post("/users", async (req, res) => {
  const user = req.body;
  const result = await userCollection.insertOne(user);
  res.send(result);
});
app.get("/users", async (req, res) => {
  const users = await userCollection.find().sort({ _id: -1 }).toArray();
  res.send(users);
});
app.patch("/users", async (req, res) => {
  const user = req.body;
  const email = req.body.email;
  const query = { email };
  const updateUser = {
    $set: {
      lastSignInTime: user.lastSignInTime,
    },
  };
  const result = await userCollection.updateOne(query, updateUser);
  res.send(result);
});
app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.deleteOne(query);
  res.send(result);
});
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await userCollection.findOne(query);
  res.send(result);
});
app.patch("/users/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const query = { _id: new ObjectId(id) };
  const updateUser = {
    $set: {
      name: user.name,
      photo: user.photo,
    },
  };
  const result = await userCollection.updateOne(query, updateUser);
  res.send(result);
});
app.get("/", (req, res) => {
  res.send("Welcome to the FastFood API!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
