const Journal = require('../models/Journal');

const getJournals = (request, response) => {
  Journal.find({})
    .then((j) => {
      return response.status(200).json(j);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

const createJournal = async (request, response) => {
  const { user_id, text, date } = request.body;

  const journal = new Journal({
    user_id,
    text,
    date,
  });
  await journal.save();

  return response.status(200).json(journal);
};

const deleteJournal = async (req, res) => {
  try {
    // Get the ID of the item to delete from the request parameters
    const journalId = req.params.journalId;
    console.log('Journal ID:', journalId);

    // Find the item in the database and remove it
    const deletedJournal = await Journal.findByIdAndDelete(journalId);
    console.log('Deleted Journal:', deletedJournal);

    // If the item doesn't exist, return a 404 response
    if (!deletedJournal) {
      return res.status(404).send('Journal not found');
    }

    // Return a success response
    return res.status(200).send('Journal deleted successfully');
  } catch (error) {
    console.error('Delete Journal Error:', error);
    return res.status(500).send('Error deleting journal');
  }
};

const getAllJournalsByUserId = (request, response) => {
  const { userId } = request.params;
  Journal.find({ user_id: userId })
    .sort({ date: -1 })
    .then((j) => {
      return response.status(200).json(j);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  createJournal,
  getJournals,
  getAllJournalsByUserId,
  deleteJournal,
};
