const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController'); // This should point to your controller

// Define routes
router.post('/register', userController.registerUser);

// Export the router, not an object
module.exports = router;
