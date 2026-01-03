const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  songId: { type: Number, required: true }, // 1,2,3
  photoId: { type: Number, required: true }, // 1,2,3
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
//update file name
module.exports = mongoose.model('Photo', photoSchema);
