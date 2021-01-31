const comment = require("../models/comment");

commentCtrl = {};

commentCtrl.getcomments = async (req, res) => {
  const { idDeveet } = req.body;
  const comments = await comment.find({ idDeveet });
  res.json(comments);
};
commentCtrl.createComment = (req, res) => {
  const { idDeveet, idUser, username, avatar, content } = req.body;
  const newComment = new comment({
    idUser,
    idDeveet,
    username,
    avatar,
    content,
  });
  newComment
    .save()
    .then(() => {
      res.json({ message: "Comment created sucessfully" });
    })
    .catch((err) => {
      res.json({ message: "Something that's error" });
    });
};
module.exports = commentCtrl;
