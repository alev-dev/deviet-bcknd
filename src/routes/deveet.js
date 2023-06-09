const { Router } = require("express");
const router = Router();
const {
  getDeveets,
  deleteDeveet,
  createDeveet,
  getDeveet,
  updateDeveet,
  getDeveetsOfUser,
} = require("../controllers/deveet");

router.route("/").get(getDeveets).post(createDeveet);
router.route("/user/:id").get(getDeveetsOfUser);
router.route("/:id").get(getDeveet).delete(deleteDeveet).put(updateDeveet);

module.exports = router;
