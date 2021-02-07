const { getUsers } = require("../controllers/userlogged");
const { Router } = require("express");
const router = Router();

router.route("/").get(getUsers);

module.exports = router;
