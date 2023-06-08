const Recommendation = require('../models/Recommendation');

const getRecommendationByType = (request, response) => {
  const { emotionalType } = request.params;

  Recommendation.find({ emotion_type: emotionalType }, (err, result) => {
    if (err) {
      console.log('Error retrieving data:', err);
      response.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log(result);
      response.json(result);
    }
  });
};

const getRecommendation = (request, response) => {
  Recommendation.find({})
    .then((r) => {
      return response.status(200).json(r);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  getRecommendation,
  getRecommendationByType,
};
