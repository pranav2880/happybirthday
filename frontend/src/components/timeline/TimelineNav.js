import React from 'react';
import { motion } from 'framer-motion';

export default function TimelineNav({ moments, progress }) {
  return (
    <div className="relative">
      <div className="h-3 rounded-full bg-white/20 overflow-hidden">
        <motion.div
          className="h-3 bg-gradient-to-r from-blue-400 to-cyan-400"
          style={{ width: `${Math.max(0, Math.min(100, progress * 100))}%` }}
        />
      </div>

      {/* Blue dot */}
      <motion.div
        className="absolute -top-2 w-7 h-7 rounded-full bg-blue-500 border-4 border-white/70 shadow-xl"
        style={{ left: `calc(${progress * 100}% - 14px)` }}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />

      {/* markers */}
      <div className="relative mt-6 flex justify-between">
        {moments.map((m) => {
          const reached = progress >= (m.at ?? 0);
          return (
            <div key={m.id} className="flex flex-col items-center gap-2">
              <div
                className={`w-5 h-5 rounded-full border-2 ${
                  reached ? 'bg-cyan-400 border-white/80' : 'bg-white/20 border-white/40'
                }`}
              />
              <div className="text-xs md:text-sm text-white/80 font-semibold">{m.year}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
