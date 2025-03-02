const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

// Register User
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await userModel.registerUser(username, email, password);
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to register user" });
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.loginUser(email, password);
        if (user) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to login" });
    }
});

// Get User by ID
router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await userModel.getUserById(userId);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch user details" });
    }
});

module.exports = router;
