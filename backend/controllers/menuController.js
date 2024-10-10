const asyncHandler = require("express-async-handler");
const Menu = require("../models/menuModel");

// @desc    Fetch all menus
// @route   GET /api/menus
// @access  Public

const getMenus = asyncHandler(async (req, res) => {
  const menus = await Menu.find({});

  res.json(menus);
});

// @desc Add a menu

// @route POST /api/menus

// @access Private

const addMenu = asyncHandler(async (req, res) => {
  const { name, image, price, category, description } = req.body;

  const menu = new Menu({
    name,
    image,
    price,
    category,
    description,
  });

  const createdMenu = await menu.save();
  res.status(201).json(createdMenu);
});

// @desc    Fetch single menu

// @route   GET /api/menus/:id

// @access  Public

const getMenuById = asyncHandler(async (req, res) => {
  const menu = await Menu.findById(req.params.id);

  if (menu) {
    res.json(menu);
  } else {
    res.status(404);
    throw new Error("Menu not found");
  }
});

module.exports = { addMenu, getMenus, getMenuById };
