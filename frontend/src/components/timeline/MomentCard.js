import React from 'react';
import { motion } from 'framer-motion';

export default function MomentCard({ moment }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl"
    >
      <div className="text-white/80 font-semibold text-lg">{moment.year}</div>
      <div className="text-white font-black text-3xl mt-2">{moment.title}</div>
      <div className="text-white/80 text-lg mt-3 leading-relaxed">{moment.description}</div>
    </motion.div>
  );
}
