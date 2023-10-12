import './AddTodoForm.css';
import Button from '../Button/Button';

function AddTodoForm({ onAddTodo }) {

	const handleAddTodo = (event) => {
		event.preventDefault();
		const todoTitle = event.target.elements.todoTitle.value;
		console.log(todoTitle);
		onAddTodo(todoTitle);
		event.target.reset();
	};

	return (
		<form className="addTodoForm" onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Enter ToDo</label>
			<div className="inputWrapper">
				<input type="text" id="todoTitle"/>
				<Button />
			</div>
			
		</form>
	);
}

export default AddTodoForm;