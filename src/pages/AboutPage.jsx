import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import { useTheme } from '../hooks/useTheme';

export default function AboutPage() {
  const { themeConfig } = useTheme();
  return (
    <DefaultLayout>
      <H1>{themeConfig.navigation.about.heading}</H1>
      <p>{themeConfig.navigation.about.description}</p>
    </DefaultLayout>
  );
}
