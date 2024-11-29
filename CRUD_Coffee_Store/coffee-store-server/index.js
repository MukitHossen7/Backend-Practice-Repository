const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());
//Middleware

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qbgt9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

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

    const database = client.db("coffeeDB");
    const coffeeCollection = database.collection("coffee");
    const usersCollection = client.db("coffeeDB").collection("users");

    app.get("/coffee", async (req, res) => {
      const coffee = await coffeeCollection.find().sort({ _id: -1 }).toArray();
      res.send(coffee);
    });
    app.get("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const coffee = await coffeeCollection.findOne(query);
      res.send(coffee);
    });
    app.put("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const coffee = req.body;
      const options = { upsert: true };
      console.log(coffee);
      const updatedCoffee = {
        $set: {
          name: coffee.name,
          supplier: coffee.supplier,
          category: coffee.category,
          chef: coffee.chef,
          taste: coffee.taste,
          details: coffee.details,
          photo: coffee.photo,
        },
      };
      const result = await coffeeCollection.updateOne(
        query,
        updatedCoffee,
        options
      );
      res.send(result);
    });
    app.post("/coffee", async (req, res) => {
      const coffee = req.body;
      console.log(coffee);
      const result = await coffeeCollection.insertOne(coffee);
      res.send(result);
    });
    app.delete("/coffee/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    });

    // Users Database
    app.get("/users", async (req, res) => {
      const user = await usersCollection.find().toArray();
      res.send(user);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });
    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.log("Error connecting", error);
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
