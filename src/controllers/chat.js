const chat = require("../models/chat");

const chatCtrl = {};

chatCtrl.getChat = async (req, res) => {
  var len = (await chat.find().countDocuments()) - 25;
  const result = await chat.find().skip(len);
  res.json(result);
};
chatCtrl.newMessage = (req, res) => {
  const { avatar, idUser, message, name } = req.body;
  const newMessage = new chat({
    name,
    idUser,
    message,
    avatar,
  });
  newMessage
    .save()
    .then((response) => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = chatCtrl;
