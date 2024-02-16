import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import EmptyState from '../components/EmptyState';
import ListControls from '../components/ListControls';
import useTodoManager from '../hooks/useTodoManager';
import { EMPTY_LIST_MESSAGE } from '../constants/uiConfig';

function HomePage() {
  const [
    todoList,
    isLoading,
    addTodo,
    removeTodo,
    titleAscOrder,
    setTitleAscOrder
  ] = useTodoManager();

  return (
    <DefaultLayout>
      <H1>My List</H1>
      <AddTodoForm onAddTodo={addTodo} />
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {todoList.length === 0 ? (
            <EmptyState message={EMPTY_LIST_MESSAGE} />
          ) : (
            <>
              <ListControls
                titleAscOrder={titleAscOrder}
                setTitleAscOrder={setTitleAscOrder}
              />
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            </>
          )}
        </>
      )}
    </DefaultLayout>
  );
}

export default HomePage;
