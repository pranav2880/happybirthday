import React from 'react';
import { motion } from 'framer-motion';

const Playlist = ({ songs, currentSong, setCurrentSong }) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[0, 1, 2].map((index) => {
          const song = songs[index];
          const isActive = currentSong === index;
          
          return (
            <motion.button
              key={index}
              onClick={() => setCurrentSong(index)}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`relative p-6 rounded-2xl font-bold text-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-2xl shadow-pink-500/50' 
                  : 'bg-white/20 text-white/90 border border-white/30 hover:bg-white/30'
              }`}
            >
              {isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-2xl opacity-75 animate-pulse"
                  style={{ backgroundSize: '400% 400%' }}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
              <span className="relative z-10">{index + 1}</span>
              {isActive && <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm animate-bounce">♪</div>}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Playlist;
