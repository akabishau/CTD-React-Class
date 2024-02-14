import styled, { css } from 'styled-components';

const baseButtonStyles = css`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #555555;
  color: #ffffff;
  border: 2px solid #ffffff;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  transition:
    transform 0.3s,
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    transform: scale(1.01);
    background-color: #6c6c6c;
    border-color: #eeeeee;
  }
`;

export const AddButton = styled.button`
  ${baseButtonStyles}
  /* :disabled pseudo-class  */
  &:disabled {
    background-color: #cccccc;
    cursor: default;
  }
`;

export const SortButton = styled.button`
  ${baseButtonStyles}
  display: flex;
  align-items: center;
  justify-content: center;
`;
