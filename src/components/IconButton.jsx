import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { THEMES } from '../constants/uiConfig';

export default function IconButton({ type = 'button', variant, onClick }) {
  const { theme } = useContext(ThemeContext);

  // TODO: refactor styles to IconButtonStyles.js
  const StyledIcon = styled(THEMES[theme].buttons.remove)`
    width: 1.7em;
    height: 1.7em;
  `;

  const RemoveButton = styled.button`
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

  const BUTTON_VARIANTS = {
    remove: { Button: RemoveButton, Icon: StyledIcon }
  };

  const { Button, Icon } = BUTTON_VARIANTS[variant];

  return (
    <Button type={type} onClick={onClick}>
      <Icon />
    </Button>
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  // variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)).isRequired,
  variant: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
