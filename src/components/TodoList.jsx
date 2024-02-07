import styles from '../styles/TodoListItem.module.css';
import IconButton from './IconButton';
import PropTypes from 'prop-types';

export default function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(item => (
        <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onRemoveTodo: PropTypes.func.isRequired
};


function TodoListItem({ item, onRemoveTodo }) {
  return (
    <li className={styles.item}>
      <span>{item.title}</span>
      <IconButton variant="remove" onClick={() => onRemoveTodo(item.id)} />
    </li>
  );
}
