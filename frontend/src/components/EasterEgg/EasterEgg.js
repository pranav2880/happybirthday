import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EasterEgg({ onClose }) {
  const [stage, setStage] = useState(0);

  // stage 0: show crack
  // stage 1: show instruction "discover easter egg : find the colour red"
  // stage 2: show revealed image

  const advance = () => {
    setStage(s => Math.min(2, s + 1));
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
    >
      <motion.div
        onClick={stop}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        className="w-full max-w-2xl bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="text-white font-black text-2xl md:text-3xl">Easter egg</div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white font-bold px-4 py-2 rounded-xl bg-white/10 border border-white/15"
          >
            Close
          </button>
        </div>

        <div className="mt-8">
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="crack"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <button
                  onClick={advance}
                  className="mx-auto block w-40 h-40 rounded-3xl bg-white/10 border border-white/20 text-white text-xl font-black hover:scale-[1.02] transition"
                  title="Click the crack"
                >
                  CRACK
                </button>
                <div className="mt-6 text-white/80 text-lg">
                  Click the crack.
                </div>
              </motion.div>
            )}

            {stage === 1 && (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <div className="text-white text-2xl font-black">
                  discover easter egg:
                </div>
                <div className="text-red-300 text-2xl font-black mt-2">
                  find the colour red
                </div>
                <div className="text-white/70 mt-6">
                  (Hint: click the red “iluvyou&lt;3000” on the main page)
                </div>
                <button
                  onClick={advance}
                  className="mt-8 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-black"
                >
                  I found it
                </button>
              </motion.div>
            )}

            {stage === 2 && (
              <motion.div
                key="reveal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center text-white font-black text-2xl mb-6">
                  You found it.
                </div>
                <img
                  src="/easter_egg.jpg"
                  alt="Easter egg reveal"
                  className="w-full rounded-3xl border border-white/15 shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
