const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 40,
    unique: true,
  },
  duration: {
    type: Number,
    required: true,
    max: 75,
    unique: false,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  content: {
    type: Array,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model("Plan", planSchema);
