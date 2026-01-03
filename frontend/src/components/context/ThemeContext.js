import React, { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [isDayMode, setIsDayMode] = useState(true);

  const value = useMemo(() => ({ isDayMode, setIsDayMode }), [isDayMode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useThemeCtx() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useThemeCtx must be used inside ThemeProvider');
  return ctx;
}
