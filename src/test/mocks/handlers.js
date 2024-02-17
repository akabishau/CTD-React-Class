import { http, HttpResponse } from 'msw';
import { airtable_url } from '../../services/airtableAPI';
import {
  todosResponseMock,
  newTodoResponseMock,
  removeTodoResponseMock
} from './data';

export const handlers = [
  // TODO: add error handling - only successful responses are mocked

  // moking fetchTodos
  http.get(airtable_url, () => {
    return HttpResponse.json({ records: todosResponseMock }, { status: 200 });
  }),

  // mocking addTodo
  http.post(airtable_url, () => {
    return HttpResponse.json(newTodoResponseMock, {
      status: 200
    });
  }),

  // mocking removeTodo
  http.delete(`${airtable_url}/:id`, req => {
    const { id } = req.params;
    return HttpResponse.json(removeTodoResponseMock(id), {
      status: 200
    });
  })
];
