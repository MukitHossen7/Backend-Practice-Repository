const express = require("express");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

//Middleware
app.use(cors());
app.use(express.json());
//Middleware

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://hossenmukit7:o06nTlbod2DtvdTX@cluster0.qbgt9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    app.get("/users", async (req, res) => {
      const users = await userCollection.find().toArray();
      res.send(users);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await userCollection.findOne(query);
      res.send(user);
    });
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(id, user);
      const query = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await userCollection.updateOne(
        query,
        updatedUser,
        options
      );
      res.send(result);
    });
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(user);
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB ", error);
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello world.......");
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
