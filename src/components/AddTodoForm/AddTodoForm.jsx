import './AddTodoForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = event => {
    const newTitle = event.target.value;
    setTodoTitle(newTitle);
  };

  const handleAddTodo = event => {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo(todoTitle);
    setTodoTitle('');
    event.target.reset();
  };

  return (
    <form className="addTodoForm" onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Enter ToDo</label>
      <div className="inputWrapper">
        <input
          type="text"
          id="todoTitle"
          onChange={handleTitleChange}
          value={todoTitle}
        />
        <Button />
      </div>
    </form>
  );
}

export default AddTodoForm;
