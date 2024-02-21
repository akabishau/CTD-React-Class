import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { THEMES } from '../constants/uiConfig';

export default function Logo() {
  const { theme } = useContext(ThemeContext);

  return (
    <LogoWrapper>
      <img src={THEMES[theme].icon} alt="Logo" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  height: 40px;
  width: 40px;
  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    color: #ffffff;
  }
`;
