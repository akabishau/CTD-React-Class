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
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = todo => {
    if (todo === '') return; // temp fix
    const newTodo = {
      id: crypto.randomUUID(),
      title: todo
    };
    setTodoList([newTodo, ...todoList]);
  };

  const removeTodo = id => {
    setTodoList(list => list.filter(todo => todo.id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return [todoList, isLoading, addTodo, removeTodo];
}

export default useTodoManager;
