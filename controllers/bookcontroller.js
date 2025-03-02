const userModel = require('../models/userModel');

// Register User
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await userModel.registerUser(username, email, password);
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to register user" });
    }
};

// Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch users" });
    }
};

module.exports = {
    registerUser,
    getAllUsers
};
