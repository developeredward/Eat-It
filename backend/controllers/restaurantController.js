const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/restaurantModel");

// @desc Create a restaurant
// @route POST /api/restaurants
// @access Private

const createRestaurant = asyncHandler(async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      phone,
      logourl,
      imageurl,
      rating,
      numReviews,
      menu,
    } = req.body;

    if (!name || !category || !phone) {
      return res.status(400).send("Please fill all the fields");
    }

    const restaurant = new Restaurant({
      name,
      description,
      category,
      phone,
      logourl,
      imageurl,
      menu,
      numReviews,
      rating,
    });

    const createdRestaurant = await restaurant.save();

    res
      .status(201)
      .send({ createdRestaurant, message: "Restaurant created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Fetch all restaurants
// @route   GET /api/restaurants
// @access  Public

const getRestaurants = asyncHandler(async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    if (restaurants.length === 0) {
      return res.status(404).send({ message: "Restaurants not found" });
    }
    res.status(200).send({
      restaurants,
      message: "Restaurants found",
      totalRestaurants: restaurants.length,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Fetch single restaurant
// @route   GET /api/restaurants/:id
// @access  Public

const getRestaurantById = asyncHandler(async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send({ message: "Restaurant not found" });
    }
    res.status(200).send({ restaurant, message: "Restaurant found" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Update restaurant
// @route   PUT /api/restaurants/:id
// @access  Private

const updateRestaurant = asyncHandler(async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send({ message: "Restaurant not found" });
    }
    if (req.body.name) restaurant.name = req.body.name;
    if (req.body.description) restaurant.description = req.body.description;
    if (req.body.category) restaurant.category = req.body.category;
    if (req.body.phone) restaurant.phone = req.body.phone;
    if (req.body.logourl) restaurant.logourl = req.body.logourl;
    if (req.body.imageurl) restaurant.imageurl = req.body.imageurl;
    if (req.body.menu) restaurant.menu = req.body.menu;
    if (req.body.rating) restaurant.rating = req.body.rating;
    if (req.body.numReviews) restaurant.numReviews = req.body.numReviews;
    await restaurant.save();
    res
      .status(200)
      .send({ message: "Restaurant updated successfully", restaurant });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

// @desc    Delete a restaurant
// @route   DELETE /api/restaurants/:id
// @access  Private

const deleteRestaurant = asyncHandler(async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).send({ message: "Restaurant not found" });
    }
    await restaurant.remove();
    res.status(200).send({ message: "Restaurant deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server Error" });
  }
});

module.exports = {
  createRestaurant,
  getRestaurants,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
};
