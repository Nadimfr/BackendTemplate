const mongoose = require('mongoose');

const journalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    unique: false,
  },
  user_id: {
    type: String,
    min: 2,
    max: 1000,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Journal', journalSchema);
