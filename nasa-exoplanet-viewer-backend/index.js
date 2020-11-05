const express = require("express");
const System = require("./planet.model");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/nasa_proj", {
  useNewUserParser: true,
});
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

const planetarySystemQueryRoutes = express.Router();
planetarySystemQueryRoutes.route("/").get((req, res) => {
  const pageNumber = req.query.pagenum;
  const numElementsDisplayed = req.query.elems;

  System.find({})
    .skip(pageNumber * 20)
    .limit(20)
    .exec((err, systems) => {
      if (err) {
        console.log(err);
      } else {
        res.json(systems);
      }
    });
});

app.use("/systems", planetarySystemQueryRoutes);
app.get("/", (req, res) => {
  console.log("connection received");
  res.send("Hello!");
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
