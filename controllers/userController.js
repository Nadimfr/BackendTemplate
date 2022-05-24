const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

const login = async (request, response) => {
  console.log("LOGIN CONTROLLER")

  const { email, password } = request.body;

  try {

    // 400 -> Client Error
    if (!(email && password)) {
      return response.status(400).send("Please provide Username/Password");
    }

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(404).send("User Not Found");
    }

    if (!password) {
      return response.status(400).send("Password cannot be empty");
    }

    if (bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id, email }, process.env.TOKEN_SECRET, { expiresIn: "2h" });
      user.token = token;
      return response.status(200).json(user);
    }

    return response.status(400).send("Invalid User/Password");

  } catch (error) {
    console.log(error);
  }

};

const register = async (request, response) => {

  try {

    let { email, password } = request.body;

    if (!(email && password)) {
      return response.status(400).send("Inputs Required");
    }

    user = await User.findOne({ email });
    if (user) {
      return response.status(400).send("Email Already Exists, Please login");
    }

    password = await bcrypt.hash(password, 10);
    user = await User.create({
      email: email.toLowerCase(),
      password,
    })

    const token = jwt.sign({ userId: user._id, email }, process.env.TOKEN_SECRET, { expiresIn: "2h" });
    user.token = token;
    return response.status(200).json(user);

  } catch (error) {
    console.log(error);
  }

};

module.exports = {
  updateUser,
  createUser,
  getUser,
  getUsers,
  login,
  register
};
