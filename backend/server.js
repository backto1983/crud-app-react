const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRoutes = express.Router(); //Create an instance of the Express Router to setup endpoints
const PORT = 4000;

let Repository = require("./model");

//In this file, an Express server is being created, using the cors and body-parser middleware
app.use(cors());
app.use(bodyParser.json());

//Using the "mongoose" library to connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/todos", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

//Endpoint responsible for delivering all available items in the database
todoRoutes.route("/").get(function (req, res) {
  //This function handles incoming HTTP GET request
  Repository.find(function (err, todos) {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

//This endpoint retrieves items by providing an id
todoRoutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  Repository.findById(id, function (err, todo) {
    res.json(todo);
  });
});

//This endpoint updates an existing item
todoRoutes.route("/update/:id").post(function (req, res) {
  Repository.findById(req.params.id, function (err, todo) {
    if (!todo) res.status(404).send("Data was not found");
    else todo.description = req.body.description;
    todo.responsible = req.body.responsible;
    todo.priority = req.body.priority;
    todo.completed = req.body.completed;

    Repository.save()
      .then(todo => {
        res.json("Item updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

//Endpoint responsible for adding items by sending a HTTP post request
todoRoutes.route("/add").post(function (req, res) {
  let todo = new Repository(req.body);
  todo
    .save()
    .then(todo => {
      res.status(200).json({ "todo": "Item added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new item failed");
    });
});

//The router will be added as a middleware and will take control of requests starting with the path /todos
app.use("/todos", todoRoutes);

//Server is listening on port 4000
app.listen(PORT, function () {
  console.log("Server is running on PORT " + PORT);
});
