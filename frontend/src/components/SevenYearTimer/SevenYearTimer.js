import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TARGET = new Date('2033-01-07T00:00:00').getTime();

function format(diffMs) {
  const totalDays = Math.max(0, Math.floor(diffMs / (1000 * 60 * 60 * 24)));
  const years = Math.floor(totalDays / 365);
  const remDays = totalDays % 365;
  const months = Math.floor(remDays / 30);
  const days = remDays % 30;
  return `${years}y : ${String(months).padStart(2, '0')}m : ${String(days).padStart(2, '0')}d`;
}

export default function SevenYearTimer() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const id = setInterval(() => {
      const now = Date.now();
      setValue(format(TARGET - now));
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center"
    >
      <div className="text-white font-black text-3xl md:text-4xl mb-6">7-year timer</div>
      <div className="inline-block bg-black/30 border border-white/20 rounded-3xl px-8 py-6 font-mono text-white text-3xl md:text-4xl tracking-wider">
        {value}
      </div>
      <div className="mt-4 text-white/70 text-sm md:text-base">
        Counting down exactly 7 years from Jan 7.
      </div>
    </motion.div>
  );
}
