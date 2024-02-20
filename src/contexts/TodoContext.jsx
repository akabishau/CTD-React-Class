import { createContext, useState, useEffect } from 'react';
import * as api from '../services/airtableAPI';

// TODO: add default value for testing purposes
export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [list, setTodoList] = useState([]);
  const [isListLoading, setIsLoading] = useState(false);

  const fetchList = async () => {
    console.log('fetching list');
    setIsLoading(true);
    try {
      const list = await api.fetchTodos();
      setTodoList(list);
    } catch (error) {
      // handle error in UI
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = async title => {
    // add creation spinner
    try {
      const newTodo = await api.addTodo(title);
      setTodoList([...list, newTodo]);
    } catch (error) {
      // handle error in UI
    }
  };

  const removeTodo = async id => {
    // add creation indicator
    try {
      await api.removeTodo(id);
      setTodoList(list => list.filter(todo => todo.id !== id));
    } catch (error) {
      // handle error in UI
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <TodoContext.Provider value={{ list, isListLoading, addTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
