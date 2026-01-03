import { useEffect, useMemo, useState } from 'react';

export default function useAudioSync(currentSong) {
  const groups = useMemo(() => ({
    0: ['photo1-1.jpg', 'photo1-2.jpg', 'photo1-3.jpg'],
    1: ['photo2-1.jpg', 'photo2-2.jpg', 'photo2-3.jpg'],
    2: ['photo3-1.jpg', 'photo3-2.jpg', 'photo3-3.jpg'],
  }), []);

  const [photos, setPhotos] = useState(groups[currentSong] || []);

  useEffect(() => {
    setPhotos(groups[currentSong] || []);
  }, [currentSong, groups]);

  return photos;
}
