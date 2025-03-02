const db = require("../config/db");

// Join a Club
const joinClub = async (userId, clubId) => {
    const query = 'INSERT INTO clubMembers (user_id, club_id) VALUES (?, ?)';
    const [result] = await db.query(query, [userId, clubId]);
    return result;
};

// Leave a Club
const leaveClub = async (userId, clubId) => {
    const query = 'DELETE FROM clubMembers WHERE user_id = ? AND club_id = ?';
    const [result] = await db.query(query, [userId, clubId]);
    return result;
};

// Get Members of a Club
const getMembersByClub = async (clubId) => {
    const query = `
        SELECT users.user_id, users.username 
        FROM clubMembers 
        INNER JOIN users ON clubMembers.user_id = users.user_id 
        WHERE clubMembers.club_id = ?
    `;
    const [members] = await db.query(query, [clubId]);
    return members;
};

module.exports = {
    joinClub,
    leaveClub,
    getMembersByClub
};
