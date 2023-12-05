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

  const addTodo = async title => {
    // add creation spinner
    try {
      const newTodo = await todoService.addTodo(title);
      setTodoList([newTodo, ...todoList]);
    } catch (error) {
      console.error('Error adding todo: '.error);
    }
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
