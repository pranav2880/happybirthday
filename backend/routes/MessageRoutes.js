const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

// GET all messages
router.get('/', async (req, res) => {
  const items = await Message.find().sort({ createdAt: 1 });
  res.json(items);
});

// GET by key
router.get('/:key', async (req, res) => {
  const item = await Message.findOne({ key: req.params.key });
  if (!item) return res.status(404).json({ error: 'Message not found' });
  res.json(item);
});

module.exports = router;
