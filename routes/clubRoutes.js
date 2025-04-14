const express = require('express');
const router = express.Router();
const clubController = require('../controllers/clubController');

router.get('/clubs', clubController.getAllClubs);
router.post('/clubs', clubController.createClub);

module.exports = router;
