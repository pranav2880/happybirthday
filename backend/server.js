const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require("path");
const fs = require("fs");
const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/songs', require('./routes/songRoutes'));
app.use('/api/photos', require('./routes/photoRoutes'));
app.use('/api/moments', require('./routes/momentRoutes'));
app.use('/api/easter-egg', require('./routes/easterEggRoutes'));

// Health check
app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get("/debug-photo", (req, res) => {
  const p = path.join(__dirname, "uploads", "photos", "song1", "photo1-1.jpg");
  res.json({ exists: fs.existsSync(p), path: p });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect DB:', err.message);
    process.exit(1);
  });
