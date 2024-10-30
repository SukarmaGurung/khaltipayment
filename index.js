const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectToMongo = require("./db");
connectToMongo();
app.use(bodyParser.json());

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.listen(3001, () => {
  console.log("Backend listening at http://localhost:3001");
});