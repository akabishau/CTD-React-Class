import styled from 'styled-components';
import IconButton from './IconButton';

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(item => (
        <Item key={item.id}>
          <span>{item.title}</span>
          <IconButton variant="remove" onClick={() => onRemoveTodo(item.id)} />
        </Item>
      ))}
    </ul>
  );
}

const Item = styled.li`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555555;
  }
`;
