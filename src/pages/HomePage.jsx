import { H1 } from '../styles/TextStyles';
import useLocalTodoList from '../hooks/useLocalTodoList';
import DefaultLayout from '../layouts/Layout';
import TodoList from '../components/TodoList/TodoList';
import AddTodoForm from '../components/AddTodoForm/AddTodoForm';
import EmptyList from '../components/EmptyList/EmptyList';

const INITIAL_DATA = [
  { id: '87a44d78-11d9-4748-9e98-ea65838a0b0b', title: 'Buy groceries' },
  { id: 'a762b846-0e90-4a04-9b92-6d5a8d5a4d06', title: 'Clean the house' },
  { id: '1ad7b8a2-18fe-4bf2-9c15-7b333ecef700', title: 'Finish the report' },
  { id: '600bfcd3-635c-4d89-a267-1c73d8beeda7', title: 'Call the bank' }
];

function HomePage() {
  const [todoList, setTodoList] = useLocalTodoList(INITIAL_DATA);

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
      <H1>My List</H1>
      <AddTodoForm onAddTodo={addTodo} />
      {todoList.length === 0 ? <EmptyList /> : <TodoList todoList={todoList} />}
    </DefaultLayout>
  );
}

export default HomePage;
