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
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
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
