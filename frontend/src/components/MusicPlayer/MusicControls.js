import React, { useEffect, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

export default function MusicControls({ audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);

  // Volume
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.volume = volume;
  }, [volume, audioRef]);

  // Keep UI in sync with real audio state
  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);
    el.addEventListener("ended", onEnded);

    return () => {
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      el.removeEventListener("ended", onEnded);
    };
  }, [audioRef]);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;

    try {
      if (el.paused) await el.play();
      else el.pause();
    } catch (e) {
      console.error("play() failed:", e); // play() returns a Promise and may reject
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 shadow-2xl border-4 border-white/40 flex items-center justify-center"
      >
        {isPlaying ? (
          <Pause className="w-10 h-10 text-white" />
        ) : (
          <Play className="w-10 h-10 text-white ml-1" />
        )}
      </motion.button>

      <div className="flex items-center gap-3 bg-white/15 border border-white/20 rounded-2xl px-4 py-3 backdrop-blur-sm">
        <Volume2 className="w-5 h-5 text-white" />
        <input
          className="w-32 accent-pink-400"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
