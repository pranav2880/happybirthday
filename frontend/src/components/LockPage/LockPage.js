import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import { motion } from 'framer-motion';

const LockPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handlePassword = (e) => {
    e.preventDefault();
    const value = password.toLowerCase();
    if (value === 'anvi') {
      navigate('/reveal');
    } else if (value) {
      setErrorMsg('hint: mirror');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 to-purple-500 flex flex-col items-center justify-center p-8">
      {!showPassword ? (
        <>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-cursive text-white mb-12 text-center"
          >
            just a lil longer &lt;3
          </motion.h1>
          <CountdownTimer onComplete={() => setShowPassword(true)} />
        </>
      ) : (
        <>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          >
            What is Pranav about?
          </motion.h1>
          <form onSubmit={handlePassword} className="w-full max-w-md">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-6 text-2xl bg-white/20 backdrop-blur-xl rounded-3xl text-white placeholder-white/70 border-2 border-white/30 focus:border-white focus:outline-none"
              placeholder="Enter answer..."
              autoFocus
            />
            {errorMsg && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-300 mt-6 text-center font-medium text-xl"
              >
                {errorMsg}
              </motion.p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default LockPage;
