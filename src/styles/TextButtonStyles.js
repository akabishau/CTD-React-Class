import styled from 'styled-components';

//TODO: explore option to use styled-components' css prop for shared styles
export const AddButton = styled.button`
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
