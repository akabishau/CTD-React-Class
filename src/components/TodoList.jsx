import styles from '../styles/TodoListItem.module.css';
import IconButton from './IconButton';

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(item => (
        <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

function TodoListItem({ item, onRemoveTodo }) {
  return (
    <li className={styles.item}>
      <span>{item.title}</span>
      <IconButton variant="remove" onClick={() => onRemoveTodo(item.id)} />
    </li>
  );
}
