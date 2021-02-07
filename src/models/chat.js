const { model, Schema } = require("mongoose");

const chat = new Schema(
  {
    idUser: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("chat", chat);
