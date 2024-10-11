const asyncHandler = require("express-async-handler");
const Menu = require("../models/menuModel");

// @desc    Fetch all menus
// @route   GET /api/menus
// @access  Public

const getMenus = asyncHandler(async (req, res) => {
  try {
    const menus = await Menu.find({});
    if (menus.length === 0) {
      return res.status(404).send({ message: "Menus not found" });
    }
    res
      .status(200)
      .send({ menus, message: "Menus found", totalFoods: menus.length });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc Add a menu

// @route POST /api/menus

// @access Private

const addMenu = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      image,
      price,
      category,
      description,
      isAvailable,
      restaurant,
      rating,
    } = req.body;

    if (!name || !price || !description || !restaurant) {
      return res.status(400).send({ message: "Please fill all the fields" });
    }

    const menu = new Menu({
      name,
      image,
      price,
      category,
      description,
      isAvailable,
      restaurant,
      rating,
    });

    const createdMenu = await menu.save();

    res.status(201).send({ createdMenu, message: "Menu created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Fetch single menu

// @route   GET /api/menus/:id

// @access  Public

const getMenuById = asyncHandler(async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).send({ message: "Menu not found" });
    }
    res.status(200).send({ menu, message: "Menu found" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc   Update a menu
// @route  PUT /api/menus/:id
// @access Private

const updateMenu = asyncHandler(async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).send({ message: "Menu not found" });
    }
    if (req.body.name) menu.name = req.body.name;
    if (req.body.image) menu.image = req.body.image;
    if (req.body.price) menu.price = req.body.price;
    if (req.body.category) menu.category = req.body.category;
    if (req.body.description) menu.description = req.body.description;
    if (req.body.isAvailable) menu.isAvailable = req.body.isAvailable;
    if (req.body.restaurant) menu.restaurant = req.body.restaurant;
    if (req.body.rating) menu.rating = req.body.rating;
    await menu.save();
    res.status(200).send({ message: "Menu updated successfully", menu });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Delete a menu
// @route   DELETE /api/menus/:id
// @access  Private

const deleteMenu = asyncHandler(async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).send({ message: "Menu not found" });
    }
    await menu.deleteOne({ _id: req.params.id });
    res.status(200).send({ message: "Menu deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = { addMenu, getMenus, getMenuById, updateMenu, deleteMenu };
