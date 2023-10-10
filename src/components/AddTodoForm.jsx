import Button from './Button/Button';

export default function AddTodoForm() {
	return (
		<form>
			<label htmlFor="todoTitle">Title</label>
			<input type="text" id="todoTitle" />
			<Button />
		</form>
	);
}