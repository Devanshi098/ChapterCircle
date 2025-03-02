const express = require("express");
const router = express.Router();
const clubMemberModel = require("../models/clubmemberModel");

// Join Club
router.post('/join', async (req, res) => {
    const { userId, clubId } = req.body;
    try {
        await clubMemberModel.joinClub(userId, clubId);
        res.status(201).json({ message: "Joined club successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to join club" });
    }
});

// Leave Club
router.post('/leave', async (req, res) => {
    const { userId, clubId } = req.body;
    try {
        await clubMemberModel.leaveClub(userId, clubId);
        res.status(200).json({ message: "Left club successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to leave club" });
    }
});

module.exports = router;
