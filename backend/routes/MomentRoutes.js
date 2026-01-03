const express = require('express');
const Moment = require('../models/Moment');

const router = express.Router();

// GET all moments
router.get('/', async (req, res) => {
  const moments = await Moment.find().sort({ at: 1 });
  res.json(moments);
});

module.exports = router;
