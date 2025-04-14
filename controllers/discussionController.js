const pool = require('../config/db');

// Create a new discussion
const createDiscussion = async (req, res) => {
    try {
        const { club_id, user_id, message } = req.body;

        if (!club_id || !user_id || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const [result] = await pool.execute(
            'INSERT INTO discussions (club_id, user_id, message, created_at) VALUES (?, ?, ?, NOW())',
            [club_id, user_id, message]
        );

        res.status(201).json({ message: 'Discussion created successfully', discussionId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get all discussions for a club
const getDiscussions = async (req, res) => {
    try {
        const { club_id } = req.params;

        const [discussions] = await pool.execute(
            `SELECT d.*, u.username 
             FROM discussions d
             JOIN users u ON d.user_id = u.user_id
             WHERE d.club_id = ?
             ORDER BY d.created_at ASC`,
            [club_id]
        );

        res.json(discussions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    createDiscussion,
    getDiscussions,
};
