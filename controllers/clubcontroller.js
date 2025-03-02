const clubModel = require('../models/clubModel');

// Create Club
const createClub = async (req, res) => {
    const { clubName, bookId, createdBy } = req.body;
    try {
        await clubModel.createClub(clubName, bookId, createdBy);
        res.status(201).json({ message: "Club created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create club" });
    }
};

// Get All Clubs
const getAllClubs = async (req, res) => {
    try {
        const clubs = await clubModel.getAllClubs();
        res.status(200).json(clubs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch clubs" });
    }
};

module.exports = {
    createClub,
    getAllClubs
};
