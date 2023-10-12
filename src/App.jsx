import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';

const INITIAL_DATA = [
  { id: 1, title: 'Learn about CRA way to initiate React app' },
  { id: 2, title: 'Learn about Vite' },
  { id: 3, title: 'Try creating app using CRA' },
  { id: 4, title: 'Try creating app using Vite' },
  { id: 5, title: 'Keep developing using better option' }
];

function App() {
  const [todoList, setTodoList] = useState(INITIAL_DATA);
  const [newTodo, setNewTodo] = useState('');

  return (
    <div>
      <h1>My List</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>{newTodo}</p>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
