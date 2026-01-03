const express = require('express');
const Song = require('../models/Song');

const router = express.Router();

// GET all songs
router.get('/', async (req, res) => {
  const songs = await Song.find().sort({ index: 1 });
  res.json(songs);
});

// GET one
router.get('/:index', async (req, res) => {
  const song = await Song.findOne({ index: Number(req.params.index) });
  if (!song) return res.status(404).json({ error: 'Song not found' });
  res.json(song);
});

module.exports = router;
