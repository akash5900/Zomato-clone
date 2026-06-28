const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true,
    },
    mobileNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["buyer", "admin", "seller", "rider"],
    },
    isactive: {
      type: Boolean,
      default: true,
    },
  },

  {
    timestamps: true,
  },
);

const usermodel = mongoose.model("user", userschema);

module.exports = usermodel;
