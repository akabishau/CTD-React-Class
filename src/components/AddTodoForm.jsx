import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

export default function AddTodoForm({ onAddTodo }) {
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
    <Form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Enter ToDo</label>
      <InputWrapper>
        <Input
          type="text"
          id="todoTitle"
          onChange={handleTitleChange}
          value={todoTitle}
        />
        <Button type={'submit'} />
      </InputWrapper>
    </Form>
  );
}

const Form = styled.form`
  background-color: #3a3a3a;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center; /* vertically alignement */
`;

const Input = styled.input`
  flex: 1; /* Allows the input to take the maximum available width */
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #555555;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s;

  &:focus {
    outline: none;
    background-color: #6c6c6c;
  }

  &:hover {
    background-color: #6c6c6c;
  }
`;
