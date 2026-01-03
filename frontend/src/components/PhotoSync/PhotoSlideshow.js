import React from 'react';
import PhotoCard from './PhotoCard';
import { motion } from 'framer-motion';
const BASE = "https://happybirthday-veig.onrender.com";
const PhotoSlideshow = ({ currentSong, photos }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {photos.map((photo, index) => (
        <motion.div
          key={`${currentSong}-${index}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
        >
          
    <PhotoCard imageSrc={photo?.startsWith("http") ? photo : `${BASE}/uploads/photos/song${currentSong + 1}/${photo}`} index={index + 1}/>


        </motion.div>
      ))}
    </div>
  );
};

export default PhotoSlideshow;
