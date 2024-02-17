import styled from 'styled-components';
// import LogoClassic from '../assets/icon_classic.svg';
import LogoMission from '../assets/logo_mission.svg';

export default function Logo() {
  return (
    <LogoWrapper>
      <img src={LogoMission} alt="Logo" />
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
