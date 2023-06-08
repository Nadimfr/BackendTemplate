const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
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
  created_at: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('History', historySchema);
