require('dotenv').config();
const connectDB = require('./config/db');

const Song = require('./models/Song');
const Photo = require('./models/Photo');
const Moment = require('./models/Moment');
const EasterEgg = require('./models/EasterEgg');
const Message = require('./models/Message');

async function run() {
  await connectDB();

  await Promise.all([
    Song.deleteMany({}),
    Photo.deleteMany({}),
    Moment.deleteMany({}),
    EasterEgg.deleteMany({}),
    Message.deleteMany({})
  ]);

  await Song.insertMany([
    { index: 0, title: 'Song 1', artist: '—', url: '/audio/song1.mp3' },
    { index: 1, title: 'Song 2', artist: '—', url: '/audio/song2.mp3' },
    { index: 2, title: 'Song 3', artist: '—', url: '/audio/song3.mp3' }
  ]);

  await Photo.insertMany([
    { songIndex: 0, index: 0, url: '/photos/song1/photo1-1.jpg' },
    { songIndex: 0, index: 1, url: '/photos/song1/photo1-2.jpg' },
    { songIndex: 0, index: 2, url: '/photos/song1/photo1-3.jpg' },

    { songIndex: 1, index: 0, url: '/photos/song2/photo2-1.jpg' },
    { songIndex: 1, index: 1, url: '/photos/song2/photo2-2.jpg' },
    { songIndex: 1, index: 2, url: '/photos/song2/photo2-3.jpg' },

    { songIndex: 2, index: 0, url: '/photos/song3/photo3-1.jpg' },
    { songIndex: 2, index: 1, url: '/photos/song3/photo3-2.jpg' },
    { songIndex: 2, index: 2, url: '/photos/song3/photo3-3.jpg' }
  ]);

  await Moment.insertMany([
    { year: '2019', title: 'First hello', description: 'That moment everything started.', at: 0.12 },
    { year: '2021', title: 'A core memory', description: 'We became “us”.', at: 0.36 },
    { year: '2024', title: 'The glow up', description: 'More laughs, more love.', at: 0.62 },
    { year: '2026', title: '7 years?', description: 'A question that feels like a promise.', at: 0.92 }
  ]);

  await EasterEgg.insertMany([
    { key: 'red_click', hint: 'discover easter egg : find the colour red', imageUrl: '/easter_egg.jpg' }
  ]);

  await Message.insertMany([
    { key: 'birthday_header', text: 'Happiest Birthday to my luvly Goat!!!!' }
  ]);

  console.log('Seed complete');
  process.exit(0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
