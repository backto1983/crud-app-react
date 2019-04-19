const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

//In this file, an Express server is being created, using the cors and body-parser middleware

app.use(cors());
app.use(bodyParser.json());

//Using the "mongoose" library to connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/crud-react-app", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

//Server is listening on port 4000
app.listen(PORT, function() {
  console.log("Server is running on PORT " + PORT);
});
