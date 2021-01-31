const { model, Schema } = require("mongoose");

const comment = new Schema(
  {
    idDeveet: {
      type: String,
      required: true,
    },
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
  },
  { timestamps: true }
);

module.exports = model("comment", comment);
