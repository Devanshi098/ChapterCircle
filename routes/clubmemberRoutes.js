const express = require('express');
const router = express.Router();
const clubMemberController = require('../controllers/clubMemberController');

router.get('/clubmembers/:clubId', clubMemberController.getMembersByClub);
router.post('/clubmembers', clubMemberController.addMember);
router.post('/clubmembers/leave', clubMemberController.leaveMember);


module.exports = router;
