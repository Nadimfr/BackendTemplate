const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 2,
        max: 40,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
        max: 75,
        unique: false,
    },
    last_name: {
        type: String,
        required: true,
        max: 75,
        unique: false,
    },
    age: {
        type: Number,
        required: true,
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
        required: true,
        max: 75,
        unique: false,
    },
    phone_number: {
        type: Number,
        required: true,
        unique: true,
    },
    height: {
        type: Number,
        required: true,
        unique: false,
    },
    weight: {
        type: Number,
        required: true,
        unique: false,
    }
});

module.exports = mongoose.model("User", userSchema);