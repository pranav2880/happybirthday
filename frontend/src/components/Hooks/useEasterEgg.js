import { useState } from 'react';

export default function useEasterEgg() {
  const [open, setOpen] = useState(false);
  return { open, openEgg: () => setOpen(true), closeEgg: () => setOpen(false) };
}
