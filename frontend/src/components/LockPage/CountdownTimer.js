import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-01-07T00:00:00').getTime();

const CountdownTimer = ({ onComplete }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      if (now >= TARGET_DATE) {
        setCountdown('00d : 00h : 00m : 00s');
        onComplete();
        return;
      }

      const distance = TARGET_DATE - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
      
      setCountdown(`${days}d : ${hours}h : ${minutes}m : ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white/20 backdrop-blur-xl p-12 rounded-3xl shadow-2xl text-3xl md:text-4xl font-mono text-white text-center"
    >
      {countdown}
    </motion.div>
  );
};

export default CountdownTimer;
