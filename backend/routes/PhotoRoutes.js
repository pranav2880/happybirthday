const express = require('express');
const Photo = require('../models/photo');
const router = express.Router();

router.get('/', async (req, res) => {
  const photos = await Photo.find().sort({ songId: 1, photoId: 1 });
  res.json(photos);
});

module.exports = router;
