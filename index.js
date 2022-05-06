const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

//middleware:
app.use(cors());
app.use(express.json());

// connection to application:

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3c4hy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  console.log("warehouse connected user DB");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res) => {
  res.send("Electronics Warehouse Management");
});

app.listen(port, () => {
  console.log("warehouse server", port);
});
