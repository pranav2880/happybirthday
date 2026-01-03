const mongoose = require('mongoose');

const easterEggSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true }, // "red_click"
    hint: { type: String, default: 'discover easter egg : find the colour red' },
    imageUrl: { type: String, required: true } // /easter_egg.jpg or hosted url
  },
  { timestamps: true }
);

module.exports = mongoose.model('EasterEgg', easterEggSchema);
