import React, { createContext, useContext, useMemo, useRef, useState } from 'react';

const AudioContextX = createContext(null);

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  const value = useMemo(
    () => ({ audioRef, currentSong, setCurrentSong, isPlaying, setIsPlaying, volume, setVolume }),
    [currentSong, isPlaying, volume]
  );

  return <AudioContextX.Provider value={value}>{children}</AudioContextX.Provider>;
}

export function useAudioCtx() {
  const ctx = useContext(AudioContextX);
  if (!ctx) throw new Error('useAudioCtx must be used inside AudioProvider');
  return ctx;
}
