const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminSchema = new Schema({
  email: {
    type: String,
    requireq: true,
  },
  password: {
    type: String,
    requireq: true,
  },
});

module.exports = mongoose.model("Admin", adminSchema);
