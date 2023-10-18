import styled from 'styled-components';

export default function Button({ variant, label, type }) {
  if (variant === 'add') {
    return <AddButton type={type}>{label}</AddButton>;
  } else if (variant === 'delete') {
    return <DeleteButton type={type}>{label}</DeleteButton>;
  }
  // Default return
  return <BaseButton type={type}>{label}</BaseButton>;
}

// shape and fonts
const BaseButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s,
    border-color 0.3s;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.01);
  }
`;

// add option
const AddButton = styled(BaseButton)`
  background-color: #555555;
  color: #ffffff;
  border: 2px solid #ffffff;

  &:hover {
    background-color: #6c6c6c;
    border-color: #eeeeee;
  }
`;

// remove option
const DeleteButton = styled(BaseButton)`
  background-color: #ff4d4d;
  color: #ffffff;
  border: 2px solid #ff1a1a;

  &:hover {
    background-color: #ff1a1a;
    border-color: #e60000;
  }
`;
