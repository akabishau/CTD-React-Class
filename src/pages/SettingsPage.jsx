import DefaultLayout from '../layouts/DefaultLayout';
import ThemePicker from '../components/ThemePicker';
import { H1 } from '../styles/TextStyles';
import { useTheme } from '../hooks/useTheme';

export default function SettingsPage() {
  const { themeConfig } = useTheme();

  return (
    <DefaultLayout>
      <H1>{themeConfig.navigation.settings.heading}</H1>
      <ThemePicker />
    </DefaultLayout>
  );
}
