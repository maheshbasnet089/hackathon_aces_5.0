const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  phone: Number,
  userType: {
    type: String,
    enum: ["deaf", "dumb", "blind"],
    default: "deaf",
  },
  location: String,
});

module.exports = mongoose.model("User", userSchema);
