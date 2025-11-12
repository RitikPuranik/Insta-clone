const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  passWord: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "student", "instructor"],
    default: "student"
  },
  resetToken: String,
  resetTokenExpiry: Date
});

module.exports = mongoose.model("user", userSchema);
