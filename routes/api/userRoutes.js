const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/Users
// router.route("/:userId").put(updateUser);

router.route("/:userId").delete(deleteUser);

router.route("/:userId").put(updateUser);

// /api/reaction/:userId/Reaction/:UserId
// router.route("/:userId/friends/:friendId").post(addFriend);

// router.route("/:userId/friends/:friendId").delete(removeFriend);

module.exports = router;
