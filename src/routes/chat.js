const { Router } = require("express");
const router = Router();
const { getChat, newMessage } = require("../controllers/chat");

router.route("/").get(getChat).post(newMessage);

module.exports = router;
