const clubMemberModel = require('../models/clubmemberModel');

// Add Member to Club
const addMember = async (req, res) => {
    const { clubId, userId } = req.body;
    try {
        await clubMemberModel.addMember(clubId, userId);
        res.status(201).json({ message: "Member added to club successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add member" });
    }
};

// Get All Members of a Club
const getClubMembers = async (req, res) => {
    const { clubId } = req.params;
    try {
        const members = await clubMemberModel.getClubMembers(clubId);
        res.status(200).json(members);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch club members" });
    }
};

module.exports = {
    addMember,
    getClubMembers
};
