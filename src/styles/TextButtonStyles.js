import styled, { css } from 'styled-components';

// Shared base styles for all buttons
const baseButtonStyles = css`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s,
    background-color 0.3s,
    border-color 0.3s;
`;

// Shared hover styles for theme buttons
const hoverEffect = css`
  &:hover:not(:disabled) {
    transform: scale(1.05);
    background-color: #6c6c6c;
    border-color: #eeeeee;
  }
`;

// Common disabled styles for theme buttons
const disabledStyles = css`
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.7; // Slight transparency for disabled state
`;

export const AddButton = styled.button`
  ${baseButtonStyles}
  ${hoverEffect}
  background-color: #555555;
  color: #ffffff;
  border: 2px solid #ffffff;

  &:disabled {
    background-color: #cccccc;
    ${disabledStyles}
  }
`;

export const SortButton = styled(AddButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
