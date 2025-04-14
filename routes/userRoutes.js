const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // Make sure this path is correct

router.get('/users', userController.getAllUsers); // Ensure the route handler is correct
router.post('/users', userController.createUser);

module.exports = router;
