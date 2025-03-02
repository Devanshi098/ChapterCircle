const db = require("../config/db");

// Register a New User
const registerUser = async (username, email, password) => {
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [username, email, password]);
    return result;
};

// Login User (Check Email and Password)
const loginUser = async (email, password) => {
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    const [result] = await db.query(query, [email, password]);
    return result[0];
};

// Get User by ID
const getUserById = async (userId) => {
    const query = 'SELECT * FROM users WHERE user_id = ?';
    const [result] = await db.query(query, [userId]);
    return result[0];
};

module.exports = {
    registerUser,
    loginUser,
    getUserById
};
