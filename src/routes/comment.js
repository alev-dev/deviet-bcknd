const { Router } = require("express");
const router = Router();
const { getcomments, createComment } = require("../controllers/comment");

router.route("/").get(getcomments).post(createComment);

module.exports = router;
