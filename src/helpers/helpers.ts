import { Todo } from '../models/todo.model';
import { todosByDefault } from '../data/data';

const TODOS_NAME = 'todos';



export const writeDataToLocalStorage = (key: string = TODOS_NAME, elems: Array<Todo>): void => {
  localStorage.setItem(key, JSON.stringify(elems));
}

export const readDataFromLocalStorage = (key: string = TODOS_NAME): Array<Todo> => {
  const dataString = localStorage.getItem(key);
  return dataString !== null ? JSON.parse(dataString) as Array<Todo> : todosByDefault;
}