const db = require('../config/db');

// Use async/await for promise-based queries
const getAllUsers = async (req, res) => {
  try {
    const [results] = await db.query('SELECT * FROM users');
    res.status(200).json(results); // Returning a success status with the results
  } catch (err) {
    res.status(500).send({ error: 'Failed to retrieve users', details: err });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  // Simple input validation
  if (!username || !email || !password) {
    return res.status(400).send({ error: 'All fields are required' });
  }

  try {
    const [result] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
    [username, email, password]);
    res.status(201).send({ message: 'User created successfully!', userId: result.insertId });
  } catch (err) {
    res.status(500).send({ error: 'Failed to create user', details: err });
  }
};

// Export the functions
module.exports = {
  getAllUsers,
  createUser
};
