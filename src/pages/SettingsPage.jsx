import DefaultLayout from '../layouts/DefaultLayout';
import { THEMES } from '../constants/uiConfig';
import { H1 } from '../styles/TextStyles';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function SettingsPage() {
  const { themeConfig, theme, setTheme } = useContext(ThemeContext);

  return (
    <DefaultLayout>
      <H1>{themeConfig.navigation.settings.heading}</H1>
      {/* TODO: Create ThemeSelector component */}
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
    </DefaultLayout>
  );
}
