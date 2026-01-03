import React, { useEffect, useRef } from "react";
import Playlist from "./Playlist";
import MusicControls from "./MusicControls";


const MusicPlayer = ({ currentSong, setCurrentSong }) => {
  const audioRef = useRef(null);

  const songs = [
    {
      id: 0,
      name: "505 💃",
      artist: "Arctic Monkeys",
      src: "http://localhost:5000/uploads/songs/first.mp3",
    },
    {
      id: 1,
      name: "Midnight Promises 🌙",
      artist: "Heartbeats",
      src: "http://localhost:5000/uploads/songs/midnight.mp3",
    },
    {
      id: 2,
      name: "Tu ♾️",
      artist: "Talwiinder",
      src: "http://localhost:5000/uploads/songs/forever.mp3",
    },
  ];

  useEffect(() => {
    // Try to auto-play when the selected song changes
    // (works after user has interacted with the page at least once)
    audioRef.current?.play().catch(() => {});
  }, [currentSong]);

  return (
    <div>
      {/* Add this audio element */}
      <audio ref={audioRef} src={songs[currentSong]?.src} controls={false} />

      {/* your existing UI */}
      <Playlist songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <MusicControls audioRef={audioRef} />
    </div>
  );
};

export default MusicPlayer;
