import Button from '../Button/Button';

export default function AddTodoForm() {

	const handleAddTodo = (event) => {
		event.preventDefault();
		const todoTitle = event.target.elements.todoTitle.value;
		console.log(todoTitle);
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