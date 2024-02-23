import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function AboutPage() {
  const { themeConfig } = useContext(ThemeContext);
  return (
    <DefaultLayout>
      <H1>{themeConfig.navigation.about.heading}</H1>
      <p>{themeConfig.navigation.about.description}</p>
    </DefaultLayout>
  );
}
