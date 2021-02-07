const { Schema, model } = require("mongoose");

const userloged = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("userlogged", userloged);
