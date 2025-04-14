const clubModel = require('../models/clubModel');

exports.getAllClubs = async (req, res) => {
  try {
    const clubs = await clubModel.getAllClubs();
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createClub = async (req, res) => {
  const { club_name, book_id, created_by } = req.body;
  try {
    await clubModel.createClub(club_name, book_id, created_by);
    res.send('Club created successfully!');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
