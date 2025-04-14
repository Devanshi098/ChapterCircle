const db = require("../config/db");

// Get members by club
const getMembersByClub = async (clubId) => {
    const query = `
        SELECT users.user_id, users.username 
        FROM clubmembers 
        INNER JOIN users ON clubmembers.user_id = users.user_id 
        WHERE clubmembers.club_id = ?
    `;
    const [members] = await db.query(query, [clubId]);
    return members;
};

// Join a club
const joinClub = async (userId, clubId) => {
    const query = 'INSERT INTO clubmembers (club_id, user_id) VALUES (?, ?)';
    const [result] = await db.query(query, [clubId, userId]);
    return result;
};

// Leave a club
const leaveClub = async (userId, clubId) => {
    const query = 'DELETE FROM clubmembers WHERE club_id = ? AND user_id = ?';
    const [result] = await db.query(query, [clubId, userId]);
    return result;
};

module.exports = {
    getMembersByClub,
    joinClub,
    leaveClub
};
