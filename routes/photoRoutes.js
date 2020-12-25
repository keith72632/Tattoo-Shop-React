const express = require('express');
const router = express.Router();
const { getPhotos, postPhotos } = require('../controllers/photoControllers')

router.route('/')
    .get(getPhotos)
    .post(postPhotos);


module.exports = router;