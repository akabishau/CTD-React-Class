import './App.css';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
	return (
		<div>
			<h1>My List</h1>
			<AddTodoForm/>
			<TodoList/>
		</div>
	);
}

export default App;
