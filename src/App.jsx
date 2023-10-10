import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';

function App() {

	const [newTodo, setNewTodo] = useState('');

	return (
		<div>
			<h1>My List</h1>
			<AddTodoForm onAddTodo={setNewTodo}/>
			<p>{newTodo}</p>
			<TodoList/>
		</div>
	);
}

export default App;