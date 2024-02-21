import { createContext, useState, useEffect } from 'react';
import { THEMES } from '../constants/uiConfig';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // TODO: use local storage to persist theme
  const [theme, setTheme] = useState('classic');

  const themeConfig = THEMES[theme];

  useEffect(() => {
    console.log(`theme changed ${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
