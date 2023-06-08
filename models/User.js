const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    min: 2,
    max: 40,
    unique: false,
  },
  password: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    min: 2,
    max: 60,
    required: true,
    unique: true,
  },
  image_url: {
    type: String,
    required: false,
    unique: false,
  },
  verificationCode: {
    type: Number,
    required: true,
    unique: false,
  },
});

module.exports = mongoose.model('User', userSchema);
