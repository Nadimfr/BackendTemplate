const express = require('express');
const router = express.Router();
const ticketController = require("../controllers/ticketController");

router.get("/:id", ticketController.getTicket);
router.put("/:id", ticketController.updateTicket);
router.get("/", ticketController.getTickets);
router.post("/", ticketController.createTicket);

module.exports = router;