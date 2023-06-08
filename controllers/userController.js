const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const { response } = require('express');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: 'cc273561e82de95ece49a531273e048b-102c75d8-6b0c8dda',
});

const updateUser = async (request, response) => {
  try {
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
      return response.status(200).json(users);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const login = async (request, response) => {
  const { email, password } = request.body;

  try {
    // 400 -> Client Error
    if (!email || !password) {
      return response.status(400).send('Please provide Email and Password');
    }

    const user = await User.findOne({ email });

    if (!user) {
      return response.status(404).send('User Not Found');
    }

    if (!password.trim()) {
      return response.status(400).send('Password cannot be empty');
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { userId: user._id, email },
        process.env.TOKEN_SECRET,
        { expiresIn: '2h' }
      );
      user.token = token;

      return response.status(200).json({ user, token });
    }

    return response.status(400).send('Invalid User/Password');
  } catch (error) {
    return response.status(500).send('Internal Server Error');
  }
};

const sendVerificationCode = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send('Hii');
    }

    const randomNumber = Math.floor(Math.random() * 9000) + 1000;
    mg.messages
      .create('sandboxd0d0fd6e35e9403ba0b201a0bc818722.mailgun.org', {
        from: 'Vitamind <postmaster@sandboxd0d0fd6e35e9403ba0b201a0bc818722.mailgun.org>',
        to: await email,
        subject: 'Verification Email',
        text: `Welcome to Vitamind!\nThis is your verification code: ${randomNumber}`,
      })
      .then((msg) => console.log(msg)) // logs response data
      .catch((err) => console.log(err));
    return res.status(200).json(randomNumber);
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, image_url, verificationCode } = req.body;

    // Validate the input data
    if (!username || !email || !password) {
      return res.status(400).send('Name, email, and password are required');
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user data to database
    const user = new User({
      email,
      username,
      password: hashedPassword,
      image_url,
      verificationCode,
    });
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: '2h' }
    );

    // Add token to user object
    user.token = token;

    // Return user object with token in response

    return res.status(200).json({ user, token });
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};

const deleteUser = async (req, res) => {
  try {
    // Get the ID of the item to delete from the request parameters
    const userId = req.params.id;

    // Find the item in the database and remove it
    const deletedUser = await User.findByIdAndDelete(userId);

    // If the item doesn't exist, return a 404 response
    if (!deletedUser) {
      return res.status(404).send('Item not found');
    }

    // Return a success response
    return res.status(200).send('Item deleted successfully');
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

module.exports = {
  updateUser,
  createUser,
  getUser,
  getUsers,
  login,
  register,
  deleteUser,
  sendVerificationCode,
};
