import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MomentCard from './MomentCard';
import TimelineNav from './TimelineNav';

const defaultMoments = [
  { id: 'm1', year: '2025-21 Dec ', title: 'The first step', description: 'We became US.', at: 0.12 },
  { id: 'm2', year: '2026-3 Jan', title: 'Our first kiss', description: 'The green signal to forever', at: 0.36 },
  { id: 'm3', year: '2026-7 Jan', title: 'The Beginning of something Sacred', description: 'We officially became What we always desired?', at: 0.62 },
  { id: 'm4', year: '2033', title: '7 years?', description: 'A joke that is not a joke anymore and feels like a promise.', at: 0.92 },
];

export default function Timeline({ moments = defaultMoments }) {
  const [isWalking, setIsWalking] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [active, setActive] = useState(null);

  const sorted = useMemo(
    () => [...moments].sort((a, b) => (a.at ?? 0) - (b.at ?? 0)),
    [moments]
  );

  const startWalk = () => {
    if (isWalking) return;
    setIsWalking(true);
    setActive(null);
    setProgress(0);

    const start = Date.now();
    const duration = 5200;

    const tick = () => {
      const t = Math.min(1, (Date.now() - start) / duration);
      setProgress(t);

      // pick last reached moment as "active"
      const reached = [...sorted].reverse().find(m => (m.at ?? 0) <= t);
      if (reached) setActive(reached);

      if (t < 1) requestAnimationFrame(tick);
      else setIsWalking(false);
    };

    requestAnimationFrame(tick);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl">
      <div className="flex items-center justify-between gap-6 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
          Our little timeline
        </h2>
        <button
          onClick={startWalk}
          className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold hover:scale-[1.02] transition"
        >
          wanna take a stroll?
        </button>
      </div>

      <TimelineNav moments={sorted} progress={progress} />

      <div className="mt-10">
        <AnimatePresence mode="wait">
          {active ? (
            <MomentCard key={active.id} moment={active} />
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-white/80 text-lg"
            >
              Click “wanna take a stroll?” and watch the dot travel.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {progress >= 0.98 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-10 text-center text-4xl md:text-5xl font-black text-cyan-300 drop-shadow-xl"
        >
          7 years?
        </motion.div>
      )}
    </div>
  );
}
