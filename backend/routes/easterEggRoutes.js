const express = require('express');
const EasterEgg = require('../models/EasterEgg');

const router = express.Router();

// GET all easter eggs (you likely only have 1)
router.get('/', async (req, res) => {
  const eggs = await EasterEgg.find().sort({ createdAt: 1 });
  res.json(eggs);
});

// GET by key
router.get('/:key', async (req, res) => {
  const egg = await EasterEgg.findOne({ key: req.params.key });
  if (!egg) return res.status(404).json({ error: 'Easter egg not found' });
  res.json(egg);
});

module.exports = router;
