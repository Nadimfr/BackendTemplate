const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

router.get('/', journalController.getJournals);
router.post('/create', journalController.createJournal);
router.get('/:userId', journalController.getAllJournalsByUserId);

module.exports = router;
