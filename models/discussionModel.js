const db = require('../config/db');

const Discussion = {
  getDiscussionsByClubId: (clubId, callback) => {
    const sql = 'SELECT * FROM Discussions WHERE club_id = ?';
    db.query(sql, [clubId], callback);
  },

  createDiscussion: (clubId, userId, title, content, callback) => {
    const sql = 'INSERT INTO Discussions (club_id, user_id, title, content, created_at) VALUES (?, ?, ?, ?, NOW())';
    db.query(sql, [clubId, userId, title, content], callback);
  }
};

module.exports = Discussion;
