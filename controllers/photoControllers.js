const Photo = require('../models/photoModel');

const getPhotos = async(req, res) => {
    const photos = await Photo.find();
    res.status(200).json(photos);
};


const postPhotos = async(req, res) => {
    const photo = new Photo({
        image: req.body.image
    });

    await photo.save();

    res.status(201).json(photo);
};

module.exports.getPhotos = getPhotos;
module.exports.postPhotos = postPhotos;


