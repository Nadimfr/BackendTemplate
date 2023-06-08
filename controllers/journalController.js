const Journal = require('../models/Journal');

// const getDoctor = (request, response) => {
//   Doctor.findById(request.params.id)
//     .then((dr) => {
//       return response.status(200).json(dr);
//     })
//     .catch((error) => {
//       return response.status(500).json(error);
//     });
// };

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

// const getAllJournalsByUserId = async (userId) => {
//   try {
//     const journals = await Journal.find({ user_id: userId }).sort({ date: -1 });
//     return journals;
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// };

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
  //   getDoctor,
  createJournal,
  getJournals,
  getAllJournalsByUserId,
};
