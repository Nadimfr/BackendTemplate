const Plan = require("../models/Plan");

const getPlans = (request, response) => {
  Plan.find({})
    .then((plan) => {
      console.log(plan);
      return response.status(200).json(plan);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  getPlans,
};
