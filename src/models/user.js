// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  imagUrl: String,
  email: String,
  givenName: String,
  familyName: String,
  name: String,
  accessToken: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;