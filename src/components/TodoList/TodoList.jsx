import './TodoList.css';
import TodoListItem from '../TodoListItem/TodoListItem';

function TodoList({ todoList }) {
  return (
    <ul className="todo-list">
      {todoList.map(item => (
        <TodoListItem key={item.id} todo={item.title} />
      ))}
    </ul>
  );
}

export default TodoList;
