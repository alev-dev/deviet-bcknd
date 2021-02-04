const { model, Schema } = require("mongoose");

const deveet = new Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
    },
    content: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
    img: {
      type: String,
    },
    video: {
      type: String,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = model("deveet", deveet);
