const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema({
  year: String,
  title: String,
  description: String,
  position: { type: Number, min: 0, max: 1 } // Timeline position
});

module.exports = mongoose.model('Moment', momentSchema);
