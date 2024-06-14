const mongoose = require("mongoose");
const { Schema } = mongoose;

// DEFINE USER SCHEMA
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  dateOfBirth: {
    day: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    enum: ["job-seeker", "employer"],
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// CREATE MODEL
const UserModel = mongoose.model("User", userSchema);

// EXPORT MODEL
module.exports = UserModel;
