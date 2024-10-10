const express = require("express");
const path = require("path");

const router = express.Router();

const {
  registerController,
  loginController,
} = require("../../controllers/auth/authController");

// router.post("/login", authUser);
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
