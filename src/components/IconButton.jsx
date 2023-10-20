import styled from 'styled-components';
import { MdOutlineRemoveCircle } from 'react-icons/md';

export default function IconButton({ variant, onClick }) {
  if (variant == 'remove') {
    return (
      <RemoveButton onClick={onClick}>
        <RemoveIcon />
      </RemoveButton>
    );
  }
  return <button onClick={onClick}>Button</button>;
}

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
