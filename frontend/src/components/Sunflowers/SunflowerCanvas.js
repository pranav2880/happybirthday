import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DayNightToggle from './DayNightToggle';

export default function SunflowerCanvas({
  isDayMode,
  setIsDayMode,
  sunflowerReplied,
  setSunflowerReplied,
}) {
  useEffect(() => {
    // When switching to night, second flower replies (your story logic)
    if (!isDayMode) setSunflowerReplied(true);
  }, [isDayMode, setSunflowerReplied]);

  return (
    <section className="max-w-6xl mx-auto px-8 mb-24">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <h2 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
            Sunflowers
          </h2>
          <DayNightToggle isDayMode={isDayMode} setIsDayMode={setIsDayMode} />
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.img
          src={`/sunflowers/${isDayMode ? 'day' : 'night'}.png`}
          alt="Sunflower one"
          className="w-56 md:w-72 drop-shadow-2xl"
          animate={{ rotate: isDayMode ? -8 : 8 }}
          transition={{ type: 'spring', stiffness: 80, damping: 10 }}
          />

          <motion.img
          key={isDayMode ? 'right-day' : 'right-night'}
          src={`/sunflowers/${isDayMode ? 'day' : 'night-right'}.png`}
          alt="Sunflower two"
          className="w-56 md:w-72 drop-shadow-2xl"
          animate={{ rotate: isDayMode ? 10 : -10 }}
          transition={{ type: 'spring', stiffness: 80, damping: 10 }}
          />

        </div>

        <div className="mt-10 text-center" color>
          <motion.div
            key={isDayMode ? 'daytext' : 'nighttext'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/15 border border-white/20 rounded-3xl px-8 py-6 text-black text-xl md:text-2xl font-semibold"
          >
            {isDayMode
              ? `“the sun's beautiful isn't it?”`
              : `“sure is.”`}
          </motion.div>

          <AnimatePresence>
            {!isDayMode && sunflowerReplied && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-10 bg-white/10 border border-white/15 rounded-3xl p-8 text-white/90 text-lg md:text-xl leading-relaxed"
              >
                “Did you know when the sun sets sunflowers turn to each other because even in the silent
                dark night they find light in each other.”
                <div className="mt-6 font-bold">
                  “You are the sunflower i'd turn to everytime night falls and you are the sunflower i'd watch the sun with”
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
