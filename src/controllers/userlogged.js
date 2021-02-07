const userlogged = require("../models/userlogged");
const userloggedCtrl = {};

userloggedCtrl.getUsers = async (req, res) => {
  const listUser = await userlogged.find();
  res.json(listUser);
};

userloggedCtrl.createUser = (req, res) => {
  const { username, email, googleId, avatar } = req.body;
  const newUser = new userlogged({
    username,
    email,
    googleId,
    avatar,
  });
  newUser
    .save()
    .then(() => {
      res.json({ message: "User Created" });
    })
    .catch((err) => {
      res.json({ message: err });
    });
};

userloggedCtrl.deleteUser = async (req, res) => {
  const { id } = req.params;
  await modelUser.findByIdAndDelete(id);
  res.json({ message: "user deleted" });
};

module.exports = userloggedCtrl;
