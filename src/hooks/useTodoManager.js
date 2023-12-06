import { useEffect, useState } from 'react';
import * as todoService from '../services/todoService';

function useTodoManager() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
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
      setTodoList([newTodo, ...todoList]);
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

  return [todoList, isLoading, addTodo, removeTodo];
}

export default useTodoManager;
