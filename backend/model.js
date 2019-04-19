const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//This file contains the schema for the objects that are going to be stored in the database

let Repository = new Schema({
  description: {
    type: String
  },

  responsible: {
    type: String
  },

  priority: {
    type: String
  },

  completed: {
    type: Boolean
  }
});

module.exports = mongoose.model("Repository", Repository);
