import './styles.css';
import { useEffect, useState } from 'react';
import DefaultLayout from '../../layouts/DefaultLayout';
import TodoList from '../../components/TodoList/TodoList';
import AddTodoForm from '../../components/AddTodoForm/AddTodoForm';
import EmptyList from '../../components/EmptyList/EmptyList';

const INITIAL_DATA = [
  { id: '87a44d78-11d9-4748-9e98-ea65838a0b0b', title: 'Buy groceries' },
  { id: 'a762b846-0e90-4a04-9b92-6d5a8d5a4d06', title: 'Clean the house' },
  { id: '1ad7b8a2-18fe-4bf2-9c15-7b333ecef700', title: 'Finish the report' },
  { id: '600bfcd3-635c-4d89-a267-1c73d8beeda7', title: 'Call the bank' }
];

function HomePage() {
  // const [todoList, setTodoList] = useState(INITIAL_DATA);
  const [todoList, setTodoList] = useState(() => {
    const localList = localStorage.getItem('todolist');
    return localList ? JSON.parse(localList) : INITIAL_DATA;
  });

  useEffect(() => {
    console.log('app reloaded, todolist updated');
    localStorage.setItem('todolist', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = todo => {
    if (todo === '') return;
    const newTodo = {
      id: crypto.randomUUID(),
      title: todo
    };
    setTodoList([newTodo, ...todoList]);
  };

  return (
    <DefaultLayout>
      <h1>My List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {todoList.length === 0 ? <EmptyList /> : <TodoList todoList={todoList} />}
    </DefaultLayout>
  );
}

export default HomePage;
