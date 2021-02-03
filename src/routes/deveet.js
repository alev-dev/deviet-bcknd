const { Router } = require("express");
const router = Router();
const {
  getDeveets,
  deleteDeveet,
  createDeveet,
  getDeveet,
  updateDeveet,
  getDeveetsOfUser,
  updateLikeList,
} = require("../controllers/deveet");

router.route("/").get(getDeveets).post(createDeveet);
router.route("/user/:id").get(getDeveetsOfUser);
router.route("/:id").get(getDeveet).delete(deleteDeveet).put(updateDeveet);
router.route("/:id/likes", updateLikeList);

module.exports = router;
