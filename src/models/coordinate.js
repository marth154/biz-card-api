// Require Mongoose
const mongoose = require("mongoose");
const UserModel = require("./user");

// Define a schema
const Schema = mongoose.Schema;

const CoordSchema = new Schema({
  user_id: { type: String, require: true },
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  instagram: String,
  youtube: String,
  facebook: String,
  place: String,
});

const CoordModel = mongoose.model("Coordinate", CoordSchema);

module.exports = CoordModel;
