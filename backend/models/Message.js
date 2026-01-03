const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true }, // e.g. "birthday_header"
    text: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
