const db = require("../config/db");

// Create a New Club
const createClub = async (clubName, bookId, createdBy) => {
    const query = 'INSERT INTO clubs (club_name, book_id, created_by) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [clubName, bookId, createdBy]);
    return result;
};

// Get All Clubs
const getAllClubs = async () => {
    const query = `
        SELECT clubs.*, users.username AS created_by_username 
        FROM clubs 
        LEFT JOIN users ON clubs.created_by = users.user_id
    `;
    const [clubs] = await db.query(query);
    return clubs;
};

// Get Club by ID
const getClubById = async (clubId) => {
    const query = `
        SELECT clubs.*, users.username AS created_by_username 
        FROM clubs 
        LEFT JOIN users ON clubs.created_by = users.user_id
        WHERE clubs.club_id = ?
    `;
    const [club] = await db.query(query, [clubId]);
    return club[0];
};

module.exports = {
    createClub,
    getAllClubs,
    getClubById
};
