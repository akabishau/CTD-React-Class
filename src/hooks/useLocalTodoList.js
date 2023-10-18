import { useState, useEffect } from 'react';

function useLocalTodoList(initialData) {
  const [todoList, setTodoList] = useState(() => {
    const localList = localStorage.getItem('todolist');
    return localList ? JSON.parse(localList) : initialData;
  });

  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem('todolist', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}

export default useLocalTodoList;
