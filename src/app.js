const express = require("express");
const cors = require("cors");
const UserModel = require("./models/user");
const bodyParser = require('body-parser'); 
const userRouter = require("./routes/user");
const coordRouter = require("./routes/coordinate");
require("dotenv").config();
require("./client/mongo");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/coord", coordRouter);

app.listen((port = process.env.PORT || 4000), () => {
  console.log(`Example app listening on port ${port}`);
});
