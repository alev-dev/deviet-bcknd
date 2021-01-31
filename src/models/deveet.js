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
  },
  { timestamps: true }
);

deveet.methods.setimg = function setimg(filename) {
  this.img = `http://localhost:4000/public/${filename}`;
};
deveet.methods.setvideo = function setvideo(filename) {
  this.video = `http://localhost:4000/public/${filename}`;
};

module.exports = model("deveet", deveet);
