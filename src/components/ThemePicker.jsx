import { useTheme } from '../hooks/useTheme';
import { THEMES } from '../constants/uiConfig';

function getThemeOptions() {
  return Object.keys(THEMES).map(option => ({
    value: option,
    label: THEMES[option].selector
  }));
}

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const themeOptions = getThemeOptions();

  return (
    <select
      value={theme}
      onChange={event => {
        setTheme(event.target.value);
      }}
    >
      {Object.keys(THEMES).map(option => (
        <option key={option} value={option}>
          {THEMES[option].selector}
        </option>
      ))}
    </select>
  );
}
