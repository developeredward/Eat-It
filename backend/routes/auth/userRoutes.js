const express = require("express");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const router = express.Router();

const {
  getUserController,
  updatePasswordController,
  updateUserController,
  deleteUserController,
} = require("../../controllers/auth/userController");

router.get("/profile", authMiddleware, getUserController);
router.put("/profile", authMiddleware, updateUserController);
router.put("/profile/password", authMiddleware, updatePasswordController);
router.delete("/profile", authMiddleware, deleteUserController);

module.exports = router;
