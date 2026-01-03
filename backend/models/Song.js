const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: String,
  url: { type: String, required: true },
  duration: Number
});

module.exports = mongoose.model('Song', songSchema);
