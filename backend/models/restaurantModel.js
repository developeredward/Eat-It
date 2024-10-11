const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageurl: {
      type: String,
    },
    logourl: {
      type: String,
    },
    coordinates: {
      name: {
        type: String,
      },
      address: {
        type: String,
      },
      latitude: { type: Number },
      latitudeDelta: { type: Number },
      longitude: { type: Number },
      longitudeDelta: { type: Number },
    },
    phone: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },

    category: {
      type: String,
      required: true,
      enum: ["american", "local", "african", "asian", "other"],
    },
    description: {
      type: String,
    },
    menu: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);
