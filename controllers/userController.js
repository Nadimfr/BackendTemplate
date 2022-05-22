const User = require("../models/User");

const updateUser = async (request, response) => {
  try {
    console.log(request.body);
    const user = await User.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const createUser = (request, response) => {
  User.create(request.body)
    .then((user) => {
      return response.status(200).json(user);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const getUser = (request, response) => {
  User.findById(request.params.id)
    .then((user) => {
      return response.status(200).json(user);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const getUsers = (request, response) => {
  User.find({})
    .then((users) => {
      console.log(users);
      return response.status(200).json(users);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  updateUser,
  createUser,
  getUser,
  getUsers,
};
