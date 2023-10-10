const todoList = [
	{ id: 1, title: 'Learn about CRA way to initiate React app' },
	{ id: 2, title: 'Learn about Vite'},
	{ id: 3, title: 'Try creating app using CRA' },
	{ id: 4, title: 'Try creating app using Vite' },
	{ id: 4, title: 'Keep developing using better option' }
];

export default function TodoList() {
	return (
		<ul>
			{ todoList.map(item => <li key={item.id}>{item.title}</li>) }
		</ul>
	);
}