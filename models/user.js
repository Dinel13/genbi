const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    requireq: true,
  },
  password: {
    type: String,
    requireq: true,
  },
  name: {
    type: String,
    requireq: true,
  },
});

module.exports = mongoose.model("User", userSchema);
