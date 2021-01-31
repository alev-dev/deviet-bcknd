const deveet = require("../models/deveet");

deveetCtrl = {};

deveetCtrl.getDeveets = async (req, res) => {
  const deveets = await deveet.find().sort({ createdAt: "-1" });
  res.json(deveets);
};

deveetCtrl.createDeveet = async (req, res) => {
  const { idUser, username, avatar, content, likes, mediaUrl } = req.body;
  const newDeveet = new deveet({
    idUser,
    username,
    avatar,
    content,
    likes,
    mediaUrl,
  });
  if (req.file) {
    const { mimetype, filename } = req.file;
    if (mimetype.indexOf("image") === 0) {
      newDeveet.setimg(filename);
    } else if (mimetype.indexOf("video") === 0) {
      newDeveet.setvideo(filename);
    }
  }
  newDeveet
    .save()
    .then(() => {
      res.json({ message: "Deveet created" });
    })
    .catch((err) => {
      res.json(err);
    });
};
deveetCtrl.updateDeveet = async (req, res) => {
  const { id } = req.params;
  const { idUser, username, avatar, content, likes, mediaUrl } = req.body;
  const newDeveet = new deveet({
    _id: id,
    idUser,
    username,
    avatar,
    content,
    likes,
    mediaUrl,
  });
  await deveet.findByIdAndUpdate(id, newDeveet);
  res.json("updated");
};

deveetCtrl.deleteDeveet = async (req, res) => {
  const { id } = req.params;
  await deveet.findByIdAndDelete(id);
  res.json({ message: "deveet deleted" });
};

deveetCtrl.getDeveet = async (req, res) => {
  const { id } = req.params;
  const dev = await deveet.findById(id);
  res.json(dev);
};

module.exports = deveetCtrl;
