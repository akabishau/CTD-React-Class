import styled from 'styled-components';
import { MdOutlineRemoveCircle } from 'react-icons/md';
import PropTypes from 'prop-types';

const RemoveIcon = styled(MdOutlineRemoveCircle)`
  width: 1.5em;
  height: 1.5em;
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
  remove: { Button: RemoveButton, Icon: RemoveIcon }
};

export default function IconButton({ type = 'button', variant, onClick }) {
  const { Button, Icon } = BUTTON_VARIANTS[variant];

  return (
    <Button type={type} onClick={onClick}>
      <Icon />
    </Button>
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(Object.keys(BUTTON_VARIANTS)).isRequired,
  onClick: PropTypes.func.isRequired
};
