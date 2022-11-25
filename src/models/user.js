// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel