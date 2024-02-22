import styled from 'styled-components';
import { MdOutlineRemoveCircle as RemoveClassicIcon } from 'react-icons/md';
import { GiMineExplosion as RemoveMissionIcon } from 'react-icons/gi';

export const THEME_ICONS = {
  remove: {
    classic: RemoveClassicIcon,
    mission: RemoveMissionIcon
  }
};

export const StyledIcon = styled.div`
  height: 1.7em;
  width: auto;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: inherit;
  padding: 0px 5px;
  color: #ff6c6c;
  border: none;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.01);
    color: #ff5555;
  }
`;
