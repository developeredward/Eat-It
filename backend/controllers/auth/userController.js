const asyncHandler = require("express-async-handler");
const User = require("../../models/auth/userModel");
const bcrypt = require("bcryptjs");

// @desc GetUserController
// @route get /api/user
// @access Private

const getUserController = async (req, res) => {
  try {
    // Get user from database
    const user = await User.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // hide password
    user.password = undefined;
    // Send user data
    res.status(200).send({ msg: "User Found", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
};

// @desc UpdateUserController
// @route put /api/user

const updateUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // Update user data
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.address) user.address = req.body.address;

    await user.save();
    res.status(200).send({ message: "User updated successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
};

// @desc UpdatePasswordController
// @route put /api/user/password

const updatePasswordController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // Update password
    const isMatch = await bcrypt.compare(req.body.oldpassword, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid Password" });
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newpassword, salt);
    await user.save();
    res.status(200).send({ message: "Password updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
};

// @desc DeleteUserController

const deleteUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    // validation
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // Delete user
    await user.remove();
    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
};

module.exports = {
  getUserController,
  updateUserController,
  updatePasswordController,
  deleteUserController,
};
