import { Todo } from '../models/todo.model';
import { MemoizedTodo } from './Todo';

import styles from './styles.module.css'

interface TodoListProps {
  todos: Array<Todo>;
  handleDelete: (id: string) => void;
  handleComplete: (id: string) => void;
  handleUpdate: (id: string, task: string, done: boolean) => void;
}

export const TodoList = ({ todos, handleDelete, handleUpdate }: TodoListProps): JSX.Element | null => {
  return (
    <div className={styles['todo-list']}>
      {
        todos.map(
          ({id, title, completed}) =>
          <MemoizedTodo
            key={id}
            id={id}
            title={title}
            completed={completed}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete} 
          />
        )
      }
    </div>
  )
};