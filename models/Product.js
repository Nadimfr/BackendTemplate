const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 40,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    max: 75,
    unique: false,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  category: {
    type: String,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("Product", productSchema);
