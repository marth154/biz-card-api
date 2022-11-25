const express = require("express");
const cors = require("cors")
const UserModel = require("./models/user");
require("dotenv").config();
require("./client/mongo");

const app = express();
app.use(cors());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Hello World !" });
});

app.listen((port = process.env.PORT || 4000), () => {
  console.log(`Example app listening on port ${port}`);
});
