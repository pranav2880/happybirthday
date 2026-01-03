import React from 'react';
import PhotoSlideshow from './PhotoSlideshow';
import SyncController from './SyncController';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const PhotoSync = ({ currentSong }) => {
  const photoGroups = {
  0: [
    "https://happybirthday-veig.onrender.com/uploads/photos/song1/photo1-1.jpg",
    "https://happybirthday-veig.onrender.com/uploads/photos/song1/photo1-2.jpg",
    "https://happybirthday-veig.onrender.com/uploads/photos/song1/photo1-3.jpg",
  ],
  1: [
    "https://happybirthday-veig.onrender.com/uploads/photos/song2/photo2-1.jpg",
    "https://happybirthday-veig.onrender.com/uploads/photos/song2/photo2-2.jpg",
    "https://happybirthday-veig.onrender.com/uploads/photos/song2/photo2-3.jpg",
  ],
  2: [
    "https://happybirthday-veig.onrender.com/uploads/photos/song3/photo3-1.jpg",
    "https://happybirthday-veig.onrender.com/uploads/photos/song3/photo3-2.jpg",
    "https://happybirthday-veig.onrender.com/uploads/photos/song3/photo3-3.jpg",
  ],
};


  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-8"
    >
      {/* Photo Grid */}
      <PhotoSlideshow currentSong={currentSong} photos={photoGroups[currentSong] || []} />
      
      {/* Sync Status */}
      <SyncController currentSong={currentSong} />
      
      {/* Photo Legend */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 text-lg text-white/80 font-medium bg-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm">
          <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
          <span>Synced with Song {currentSong + 1} ♪</span>
          <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoSync;
