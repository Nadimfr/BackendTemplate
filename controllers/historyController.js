const History = require('../models/History');

const createHistory = async (request, response) => {
  try {
    const { user_id, text, created_at } = request.body;

    const history = new History({
      user_id,
      text,
      created_at,
    });

    const savedHistory = await history.save();
    return response.status(200).json(savedHistory);
  } catch (error) {
    console.error('Error creating history:', error);
    return response.status(500).json({ error: 'Failed to create history' });
  }
};

const getHistoriesByUserId = (request, response) => {
  const { userId } = request.params;
  History.find({ user_id: userId })
    .sort({ created_at: -1 })
    .then((h) => {
      return response.status(200).json(h);
    })
    .catch((error) => {
      return response.status(500).json(error);
    });
};

module.exports = {
  createHistory,
  getHistoriesByUserId,
};
