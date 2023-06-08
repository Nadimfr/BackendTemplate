const Quiz = require('../models/Quiz');

const getQuiz = (request, response) => {
  Quiz.find({})
    .then((quiz) => {
      return response.status(200).json(quiz);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  getQuiz,
};
