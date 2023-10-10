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
		<form onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Title</label>
			<input type="text" id="todoTitle"/>
			<Button />
		</form>
	);
}

export default AddTodoForm;