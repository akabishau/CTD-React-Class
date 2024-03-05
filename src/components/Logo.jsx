import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

export default function Logo() {
  const { themeConfig } = useTheme();

  return (
    <LogoWrapper>
      <img src={themeConfig.icon} alt="Logo" />
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
