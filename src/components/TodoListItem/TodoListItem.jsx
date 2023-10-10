import './TodoListItem.css';

function TodoListItem({ todo }) {
	return (
		<li className='todoItem'>{todo}</li>
	);
}

export default TodoListItem;