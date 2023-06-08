const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 40,
    unique: false,
  },
  image_url: {
    type: String,
    required: false,
    unique: false,
  },
  availability: {
    type: Array,
    required: false,
    unique: false,
  },
  status: {
    type: Boolean,
    required: false,
    unique: false,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
