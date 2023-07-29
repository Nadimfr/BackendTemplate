const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

router.get('/', journalController.getJournals);
router.post('/create', journalController.createJournal);
router.delete('/delete/:journalId', journalController.deleteJournal);
router.get('/:userId', journalController.getAllJournalsByUserId);

module.exports = router;
