import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import EmptyListMessage from '../components/EmptyListMessage';

import useTodoManager from '../hooks/useTodoManager';

function HomePage() {
  const [todoList, addTodo, removeTodo] = useTodoManager();

  return (
    <DefaultLayout>
      <H1>My List</H1>
      <AddTodoForm onAddTodo={addTodo} />
      {todoList.length === 0 ? (
        <EmptyListMessage />
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </DefaultLayout>
  );
}

export default HomePage;
