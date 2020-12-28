const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/userControllers')

router.route('/')
    .post(addUser)


module.exports = router;