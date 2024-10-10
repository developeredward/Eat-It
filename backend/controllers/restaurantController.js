const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/restaurantModel");

// @desc    Fetch all restaurants
// @route   GET /api/restaurants
// @access  Public
const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({});

  res.json(restaurants);
});

// @desc    Fetch single restaurant
// @route   GET /api/restaurants/:id
// @access  Public

const getRestaurantById = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404);
    throw new Error("Restaurant not found");
  }
});

module.exports = { getRestaurants, getRestaurantById };
