const { Router } = require("express");
const router = Router();
const { googleLogin } = require("../controllers/auth");

router.route("/").post(googleLogin);

module.exports = router;
