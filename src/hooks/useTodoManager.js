import { useEffect, useState, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import * as todoService from '../services/airtable_api';

function useTodoManager() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [titleAscOrder, setTitleAscOrder] = useLocalStorage(
    'titleAscOrder',
    true
  );

  const sortListByTitle = list => {
    if (list.length === 0) {
      return list;
    }
    return [...list].sort((a, b) => {
      return titleAscOrder
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  };

  // const sortListbyTitle

  const fetchTodos = async () => {
    console.log('fetching todos');
    setIsLoading(true);
    try {
      const todos = await todoService.fetchTodos();
      setTodoList(todos);
    } catch (error) {
      // handle error in UI
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async title => {
    // add creation spinner
    try {
      const newTodo = await todoService.addTodo(title);
      setTodoList([...todoList, newTodo]);
    } catch (error) {
      // handle error in UI
    }
  };

  const removeTodo = async id => {
    // add creation indicator
    try {
      await todoService.removeTodo(id);
      setTodoList(list => list.filter(todo => todo.id !== id));
    } catch (error) {
      // handle error in UI
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const sortedTodoList = useMemo(
    () => sortListByTitle(todoList),
    [titleAscOrder, todoList]
  );

  return [
    sortedTodoList,
    isLoading,
    addTodo,
    removeTodo,
    titleAscOrder,
    setTitleAscOrder
  ];
}

export default useTodoManager;
