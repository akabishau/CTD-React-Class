import { fetchTodos, addTodo, removeTodo } from '../services/airtableAPI';
import { todosMock, newTodo_mock, todoIdMock } from '../test/mocks/data';

describe('fetchTodos', () => {
  it('successfully fetches todos', async () => {
    const todoList = await fetchTodos();

    expect(todoList).toEqual(todosMock);
  });
});

describe('addTodo', () => {
  it('successfully adds a new todo ', async () => {
    const todo = await addTodo(newTodo_mock);

    expect(todo.id).toBeDefined();
    expect(todo.title).toBe(newTodo_mock);
  });
});

describe('removeTodo', () => {
  it('successfully deletes a todo item', async () => {
    const result = await removeTodo(todoIdMock);
    expect(result).toEqual({
      deleted: true,
      id: todoIdMock
    });
  });
});
