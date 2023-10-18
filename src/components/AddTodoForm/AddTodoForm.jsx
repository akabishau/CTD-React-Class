import './AddTodoForm.css';
import Button from '../Button';
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
        <Button variant={'add'} type={'submit'} label={'ADD'} />
      </div>
    </form>
  );
}

export default AddTodoForm;
