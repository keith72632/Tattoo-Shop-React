const express = require('express');
const router = express.Router();
const { addUser, authorizeUser } = require('../controllers/userControllers')

router.route('/')
    .post(addUser)
router.route('/login')
    .post(authorizeUser)

module.exports = router;