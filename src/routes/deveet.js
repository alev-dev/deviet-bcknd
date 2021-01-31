const { Router } = require("express");
const router = Router();
const {
  getDeveets,
  deleteDeveet,
  createDeveet,
  getDeveet,
  updateDeveet,
} = require("../controllers/deveet");
const upload = require("../libs/storage");

router.route("/").get(getDeveets).post(upload.single("media"), createDeveet);
router.route("/:id").get(getDeveet).delete(deleteDeveet).put(updateDeveet);

module.exports = router;
