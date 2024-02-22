import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { THEMES } from '../constants/uiConfig';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // TODO: Consider creating config for default local storage keys and values to avoid string literals
  const [theme, setTheme] = useLocalStorage('theme', 'classic');

  const themeConfig = THEMES[theme];

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
