import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const PhotoCard = ({ imageSrc, index }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-3xl shadow-2xl bg-white/20 backdrop-blur-sm border-4 border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer"
    >
      <img 
        src={imageSrc}
        alt={`Memory ${index}`}
        className="w-full h-64 md:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Number Badge */}
      {/* <motion.div
        className="absolute top-6 right-6 w-16 h-16 bg-pink-500/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/50"
        whileHover={{ scale: 1.1, rotate: 360 }}
      >
        <span className="text-2xl font-black text-white drop-shadow-lg">{index}</span>
      </motion.div> */}
      
      {/* Heart Animation */}
      <motion.div 
        className="absolute bottom-6 left-6 text-3xl text-white drop-shadow-2xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ♡
      </motion.div>
    </motion.div>
  );
};

export default PhotoCard;
