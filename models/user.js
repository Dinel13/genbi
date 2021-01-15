const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  pendaftar: {
    type: Schema.Types.ObjectId,
    ref: "Pendaftar",
  },
});
module.exports = mongoose.model("User", userSchema);
