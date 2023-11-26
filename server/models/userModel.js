const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    failedLoginAttempts: { type: Number, default: 0 },
    lastLoginAttempt: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
