import styled from 'styled-components';

export default function TodoListItem({ todo }) {
  return <Item>{todo}</Item>;
}

const Item = styled.li`
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555555;
  }
`;
