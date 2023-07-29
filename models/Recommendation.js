const mongoose = require('mongoose');
const recommendationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  emotion_type: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },

  details: [
    {
      title: {
        type: String,
      },
      image_file: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('recommendation', recommendationSchema);
