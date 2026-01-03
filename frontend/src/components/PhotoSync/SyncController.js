import React from 'react';
import { motion } from 'framer-motion';
import { Music, Image, Link } from 'lucide-react';

const SyncController = ({ currentSong }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl"
    >
      <div className="flex items-center justify-center gap-6 mb-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-lg"
        >
          <Music className="w-8 h-8 text-white" />
        </motion.div>
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent" />
        <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
          <Image className="w-8 h-8 text-white" />
        </div>
      </div>
      <p className="text-center text-lg font-semibold text-white drop-shadow-lg">
        Perfectly synced with Song {currentSong + 1} ♪✨
      </p>
    </motion.div>
  );
};

export default SyncController;
