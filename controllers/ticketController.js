const Ticket = require("../models/Ticket");

const updateTicket = async (request, response) => {
  try {
    console.log(request.body);
    const ticket = await Ticket.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    return response.status(200).json(ticket);
  } catch (error) {
    return response.status(500).json(error);
  }
};

const createTicket = (request, response) => {
  Ticket.create(request.body)
    .then((ticket) => {
      return response.status(200).json(ticket);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const getTicket = (request, response) => {
  Ticket.findById(request.params.id)
    .then((ticket) => {
      return response.status(200).json(ticket);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const getTickets = (request, response) => {
  Ticket.find({})
    .then((tickets) => {
      console.log(tickets);
      return response.status(200).json(tickets);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  updateTicket,
  createTicket,
  getTicket,
  getTickets,
};
