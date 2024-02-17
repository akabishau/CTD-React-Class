export const todosMock = [
  { id: '111', title: 'Task 111' },
  { id: '222', title: 'Task 222' }
];
export const todosResponseMock = todosMock.map(todo => ({
  id: todo.id,
  createdTime: '2024-02-16T04:51:41.000Z',
  fields: {
    title: todo.title
  }
}));

export const newTodo_mock = 'New Todo';
export const newTodoResponseMock = {
  id: '333',
  createdTime: '2024-02-16T04:51:41.000Z',
  fields: {
    title: newTodo_mock
  }
};

export const todoIdMock = '444';
export const removeTodoResponseMock = id => ({
  deleted: true,
  id: id
});
