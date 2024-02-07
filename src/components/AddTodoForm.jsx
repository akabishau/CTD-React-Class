import styled from 'styled-components';
import Button from './TextButton';
import InputWithLabel from './InputWithLabel';
import { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState('');

  const handleTitleChange = event => {
    const newTitle = event.target.value;
    setTodoTitle(newTitle);
  };

  const handleAddTodo = event => {
    event.preventDefault();
    onAddTodo(todoTitle);
    setTodoTitle('');
  };

  return (
    <Form onSubmit={handleAddTodo}>
      <Wrapper>
        <InputWithLabel value={todoTitle} onChange={handleTitleChange}>
          <span>Title</span>
        </InputWithLabel>

        <Button variant="add" type="submit" />
      </Wrapper>
    </Form>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

const Form = styled.form`
  background-color: #3a3a3a;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: end; /* vertically alignement */
`;
