import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import EmptyListMessage from '../components/EmptyListMessage';
import LoadingSpinner from '../components/LoadingSpinner';

import useTodoManager from '../hooks/useTodoManager';

function HomePage() {
  const [todoList, addTodo, removeTodo, isLoading] = useTodoManager();

  if (isLoading) {
    console.log('isLoading');
    return <LoadingSpinner />;
  }

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
