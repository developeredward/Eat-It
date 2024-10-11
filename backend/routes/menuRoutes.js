const express = require("express");

const router = express.Router();

const {
  getMenus,
  addMenu,
  getMenuById,
  updateMenu,
  deleteMenu,
} = require("../controllers/menuController");

router.route("/").get(getMenus).post(addMenu);
router.route("/:id").get(getMenuById).put(updateMenu).delete(deleteMenu);

module.exports = router;
