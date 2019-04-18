const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 4000;

//In this file, an Express server is being created, using the cors and body-parser middleware

app.use(cors());
app.use(bodyParser.json());

//Server is listening on port 4000
app.listen(PORT, function() {
  console.log("Server is running on PORT " + PORT);
});
