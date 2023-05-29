import { memo, useCallback, useMemo, useState } from 'react';
import { Todo } from '../models/todo.model';
import styles from './styles.module.css';
import { TodoForm } from './TodoForm';
import { TodoFilters } from './TodoFilters';
import { TodoList } from './TodoList';
import { FilterStates } from '../assets/enums/filterStates';
import { v4 as uuidv4 } from 'uuid';
import { readDataFromLocalStorage } from '../helpers/helpers';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TODOS_NAME = 'todos';


export const TodoApp = memo((): JSX.Element | null => {
  const todosFromLS = readDataFromLocalStorage(TODOS_NAME);
  // const [todos, setTodos] = useState<Array<Todo>>(todosFromLS);
  const [todos, setTodos] = useLocalStorage<Todo>(TODOS_NAME, todosFromLS);


  const [todosFilter, setTodosFilter] = useState(FilterStates.NO_FILTER);

  const todosFiltered = useMemo(() => {
    if (todosFilter === FilterStates.DONE) return todos.filter(item => item.completed);
    if (todosFilter === FilterStates.NOT_DONE) return todos.filter(item => !item.completed);
    return todos;
  }, [todos, todosFilter]);

  const handleCompleteTodo = useCallback((id: string) => {
    const newTodos = todos;
    const idx = newTodos.findIndex(item => item.id === id);
    if (idx !== -1) {
      newTodos[idx].completed = !newTodos[idx].completed;
      setTodos(newTodos);
    }
    // setTodos((prev) => {
    //   const ind = prev.findIndex(item => item.id === id);
    //   prev[ind].completed = !prev[ind].completed;
    //   console.log(prev[ind]);
    //   writeDataToLocalStorage(TODOS_NAME, prev.slice());
    //   return prev.slice();
    // });
  }, [setTodos, todos]);

  const handleAddNewTodo = useCallback((task: string) => {
    const newTodos = todos;
    const upd = [...newTodos, { id: uuidv4(), title: task, completed: false }];
    setTodos(upd);
  }, [setTodos, todos]);

  const handleUpdateTodo = useCallback((id: string, task: string, done: boolean) => {
    const newTodos = todos;
    const upd = [...newTodos.map(item => {
      if (item.id === id) {
        item.title = task;
        item.completed = done;
      }
      return item;
    })];
    setTodos(upd);
  }, [setTodos, todos]);

  const handleDeleteTodo = useCallback((id: string) => {

    const newTodos = todos;
    const upd = [...newTodos.filter(item => item.id !== id)];
    setTodos(upd);
  }, [setTodos, todos]);

  return (
    <div className={styles['todo-app']}>
      <TodoForm
        todoAddHandler={handleAddNewTodo}
      />
      <TodoFilters
        setTodosFilter={setTodosFilter}
      />
      <TodoList
        todos={todosFiltered}
        handleDelete={handleDeleteTodo}
        handleComplete={handleCompleteTodo}
        handleUpdate={handleUpdateTodo}
      />
    </div>
  );
})
