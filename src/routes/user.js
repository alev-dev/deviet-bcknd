const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const { Router } = require("express");
const router = Router();

router.route("/").get(getUsers).post(createUser);

router.route("/:id").delete(deleteUser).put(updateUser).get(getUser);

module.exports = router;
