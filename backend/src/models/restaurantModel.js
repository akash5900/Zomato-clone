const mongoose = require("mongoose");

const restaurantschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    cuisines: [
      {
        type: String,
      },
    ],
    offer: {
      type: String,
    },
    isopen: {
      type: Boolean,
      default: true,
    },
    costForTwo: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const restaurantmodel = mongoose.model("Restaurant", restaurantschema);

module.exports = restaurantmodel;
