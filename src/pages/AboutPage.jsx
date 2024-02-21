import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { THEMES } from '../constants/uiConfig';

export default function AboutPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <DefaultLayout>
      <H1>{THEMES[theme].navigation.about.heading}</H1>
      <p>{THEMES[theme].navigation.about.description}</p>
    </DefaultLayout>
  );
}
