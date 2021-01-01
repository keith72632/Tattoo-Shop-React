const express = require('express');
const router = express.Router();
const { addUser, authorizeUser, authorizeUserAsAdmin } = require('../controllers/userControllers')

router.route('/')
    .post(addUser)
router.route('/login')
    .post(authorizeUser)
router.route('/:id')
    .put(authorizeUserAsAdmin)

module.exports = router;