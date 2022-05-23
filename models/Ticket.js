const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 2,
    max: 40,
    unique: false,
  },
  email: {
    type: String,
    required: true,
    max: 75,
    unique: false,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: false,
  },
  message: {
    type: String,
    required: true,
    unique: false,
  },
  state: {
    type: Boolean,
    required: true,
    unique: false,
  }
});

module.exports = mongoose.model("Ticket", ticketSchema);
