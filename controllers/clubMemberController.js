const db = require('../config/db');
const clubMemberModel = require('../models/clubmemberModel');

exports.getMembersByClub = async (req, res) => {
  const { clubId } = req.params;
  try {
    const members = await clubMemberModel.getMembersByClub(clubId);
    res.json(members);
  } catch (err) {
    res.status(500).send(err.message);
  }
};



exports.addMember = async (req, res) => {
  const { user_id, club_id } = req.body;
  try {
    await clubMemberModel.joinClub(user_id, club_id);
    res.send('Member added to club successfully!');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.leaveMember = async (req, res) => {
  const { user_id, club_id } = req.body;
  try {
    await clubMemberModel.leaveClub(user_id, club_id);
    res.send('Member removed from club successfully!');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
