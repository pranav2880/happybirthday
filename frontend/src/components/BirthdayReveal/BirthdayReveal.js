import React, { useState, useEffect } from 'react';
import { getPhotos, getSongs, getMoments } from '../../utils/api';
import MusicPlayer from '../MusicPlayer/MusicPlayer';
import PhotoSync from '../PhotoSync/PhotoSync';
import Timeline from '../timeline/Timeline';
import Sunflowers from '../Sunflowers/SunflowerCanvas';
import SevenYearTimer from '../SevenYearTimer/SevenYearTimer';
import EasterEgg from '../EasterEgg/EasterEgg';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const BirthdayReveal = () => {
  const [currentSong, setCurrentSong] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [songs, setSongs] = useState([]);
  const [moments, setMoments] = useState([]);
  const [isDayMode, setIsDayMode] = useState(true);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [sunflowerReplied, setSunflowerReplied] = useState(false);


  useEffect(() => {
    getPhotos().then(res => setPhotos(res.data));
    getSongs().then(res => setSongs(res.data));
    getMoments().then(res => setMoments(res.data));
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDayMode ? 'bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100' : 'bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900'}`}>
      
      {/* Birthday Header */}
      <motion.div className="text-center py-20" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-8">
          Happiest Birthday to my luvly Goat!!!!
        </h1>
        <div className="flex items-center justify-center gap-4 text-3xl text-red-500 font-bold cursor-pointer hover:scale-110 transition-all" onClick={() => setShowEasterEgg(true)}>
          <Heart className="w-12 h-12 animate-pulse" />
          iluvyou&lt;3000
          <Heart className="w-12 h-12 animate-pulse" />
        </div>
      </motion.div>

      {/* Music + Photos */}
      <div className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MusicPlayer currentSong={currentSong} setCurrentSong={setCurrentSong} />
          <PhotoSync currentSong={currentSong} photos={photos} />
        </div>
      </div>

      {/* Sunflowers */}
      <Sunflowers
  isDayMode={isDayMode}
  setIsDayMode={setIsDayMode}
  sunflowerReplied={sunflowerReplied}
  setSunflowerReplied={setSunflowerReplied}
/>


      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-8 mb-20">
        <Timeline moments={moments} />
      </div>

      {/* 7 Year Timer */}
      <div className="max-w-2xl mx-auto px-8 mb-20">
        <SevenYearTimer />
      </div>

      {/* Easter Egg Modal */}
      {showEasterEgg && <EasterEgg onClose={() => setShowEasterEgg(false)} />}
    </div>
  );
};

export default BirthdayReveal;
<div className="p-6 text-3xl font-black text-red-500">Tailwind working</div>
