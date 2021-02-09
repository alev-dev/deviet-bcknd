const { Schema, model } = require("mongoose");

const user = new Schema({
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
  friends: {
    type: Array,
    default: [],
  },
  friendrequests: {
    type: Array,
    default: [],
  },
  friendsendquest: {
    type: Array,
    default: [],
  },
});

module.exports = model("user", user);
