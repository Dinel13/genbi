const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pendaftarSchema = new Schema({
  email: {
    type: String,
    requireq: true,
  },
  password: {
    type: String,
    requireq: true,
  },
});

module.exports = mongoose.model("Pendaftar", pendaftarSchema);
