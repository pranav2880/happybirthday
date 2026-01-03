import { useEffect } from 'react';

export default function useSunflower(isDayMode, setSunflowerReplied) {
  useEffect(() => {
    if (!isDayMode) setSunflowerReplied(true);
  }, [isDayMode, setSunflowerReplied]);
}
