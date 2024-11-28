require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON requests
app.use([express.json(), cors()]);
// Middleware for parsing JSON requests

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.qbgt9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("foodDB");
    const foodCollection = database.collection("food");
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
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    // await client.close();
    console.error("Failed to connect to MongoDB:", error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to the FastFood API!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
