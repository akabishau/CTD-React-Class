import useLocalStorage from './useLocalStorage';

const INITIAL_DATA = [
  { id: '87a44d78-11d9-4748-9e98-ea65838a0b0b', title: 'Buy groceries' },
  { id: 'a762b846-0e90-4a04-9b92-6d5a8d5a4d06', title: 'Clean the house' },
  { id: '1ad7b8a2-18fe-4bf2-9c15-7b333ecef700', title: 'Finish the report' },
  { id: '600bfcd3-635c-4d89-a267-1c73d8beeda7', title: 'Call the bank' }
];

function useTodoManager() {
  const [todoList, setTodoList] = useLocalStorage('todolist');

  if (todoList === null) {
    console.log('empty todo, about to load init data...');
    setTodoList(INITIAL_DATA);
  }

  const addTodo = todo => {
    console.log(`adding todo: ${todo}`);
    if (todo === '') return; // temp fix
    const newTodo = {
      id: crypto.randomUUID(),
      title: todo
    };
    setTodoList([newTodo, ...todoList]);
  };

  const removeTodo = id => {
    console.log(`removing todo: ${id}`);
    setTodoList(list => list.filter(todo => todo.id !== id));
  };

  return [todoList, addTodo, removeTodo];
}

export default useTodoManager;
