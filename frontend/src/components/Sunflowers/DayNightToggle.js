import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DayNightToggle({ isDayMode, setIsDayMode }) {
  return (
    <button
      onClick={() => setIsDayMode(v => !v)}
      className={`px-5 py-3 rounded-2xl font-bold border transition flex items-center gap-3 ${
        isDayMode
          ? 'bg-yellow-300/90 border-yellow-100 text-yellow-900'
          : 'bg-indigo-800/90 border-indigo-200/20 text-indigo-100'
      }`}
    >
      {isDayMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      {isDayMode ? 'Day mode' : 'Night mode'}
    </button>
  );
}
