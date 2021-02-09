const modelUser = require("../models/user");
const user = {};

user.getUsers = async (req, res) => {
  const listUser = await modelUser.find();
  res.json(listUser);
};

user.createUser = (req, res) => {
  const { username, email, googleId, avatar } = req.body;
  const newUser = new modelUser({
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
user.updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    username,
    email,
    password,
    friends,
    friendrequests,
    friendsendquest,
  } = req.body;
  const newUser = new modelUser({
    _id: id,
    username,
    password,
    email,
    friends,
    friendrequests,
    friendsendquest,
  });
  await modelUser.findByIdAndUpdate(id, newUser);
  res.json({ message: "user Updated" });
};

user.deleteUser = async (req, res) => {
  const { id } = req.params;
  await modelUser.findByIdAndDelete(id);
  res.json({ message: "user deleted" });
};
user.getUser = async (req, res) => {
  const { id } = req.params;
  const response = await modelUser.findOne({ googleId: id });
  res.json(response);
};

module.exports = user;
