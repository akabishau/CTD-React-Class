import styled, { keyframes } from 'styled-components';

export default function LoadingSpinner() {
  return <Spinner />;
}

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 0 auto;
  border: 8px solid #555555;
  border-radius: 50%;
  border-top: 8px solid #000;
  width: 50px;
  height: 50px;
  color: white;
  animation: ${spinAnimation} 1s linear infinite;
`;
