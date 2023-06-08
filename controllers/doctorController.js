const Doctor = require('../models/Doctor');

const getDoctor = (request, response) => {
  Doctor.findById(request.params.id)
    .then((dr) => {
      return response.status(200).json(dr);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const getDoctors = (request, response) => {
  Doctor.find({})
    .then((drs) => {
      return response.status(200).json(drs);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  getDoctor,
  getDoctors,
};
