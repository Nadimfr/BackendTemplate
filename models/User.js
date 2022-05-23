const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        min: 2,
        max: 40,
        unique: false
    },
    first_name: {
        type: String,
        max: 75,
        unique: false,
    },
    last_name: {
        type: String,
        max: 75,
        unique: false,
    },
    age: {
        type: Number,
        max: 75,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        max: 75,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    gender: {
        type: String,
        max: 75,
        unique: false,
    },
    phone_number: {
        type: Number,
        unique: true,
    },
    height: {
        type: Number,
        unique: false,
    },
    weight: {
        type: Number,
        unique: false,
    },
    token: {
        type: String,
        unique: false,
    }
});

module.exports = mongoose.model("User", userSchema);